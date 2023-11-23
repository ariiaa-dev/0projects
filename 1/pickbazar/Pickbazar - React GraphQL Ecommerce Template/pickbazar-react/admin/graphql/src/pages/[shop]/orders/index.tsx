import Card from '@/components/common/card';
import Search from '@/components/common/search';
import OrderList from '@/components/order/order-list';
import {
  useOrdersQuery,
  useGenerateOrderExportUrlMutation,
} from '@/graphql/orders.graphql';
import { LIMIT } from '@/utils/constants';
import { useState, Fragment } from 'react';
import ErrorMessage from '@/components/ui/error-message';
import Loader from '@/components/ui/loader/loader';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ShopLayout from '@/components/layouts/shop';
import { useRouter } from 'next/router';
import {
  adminOnly,
  adminOwnerAndStaffOnly,
  getAuthCredentials,
  hasAccess,
} from '@/utils/auth-utils';
import { useMyShopsQuery, useShopQuery } from '@/graphql/shops.graphql';
import { MoreIcon } from '@/components/icons/more-icon';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { DownloadIcon } from '@/components/icons/download-icon';
import { Routes } from '@/config/routes';

export default function Orders() {
  const router = useRouter();
  const {
    query: { shop },
  } = router;
  const { t } = useTranslation();
  const [generateOrderExportUrlMutation] = useGenerateOrderExportUrlMutation();
  const { data: shopData, loading: fetchingShop } = useShopQuery({
    skip: !Boolean(shop),
    variables: {
      slug: shop as string,
    },
  });
  const shopId = shopData?.shop?.id!;
  const [searchTerm, setSearchTerm] = useState('');
  const { permissions } = getAuthCredentials();
  const { data: myShop } = useMyShopsQuery();
  const { data, loading, error, refetch } = useOrdersQuery({
    skip: !Boolean(shopId),
    variables: {
      first: LIMIT,
      page: 1,
      orderBy: 'created_at',
      sortedBy: 'DESC',
      shop_id: shopId,
    },
    fetchPolicy: 'network-only',
  });
  if (loading || fetchingShop)
    return <Loader text={t('common:text-loading')} />;
  if (error) return <ErrorMessage message={error.message} />;

  function handleSearch({ searchText }: { searchText: string }) {
    setSearchTerm(searchText);
    refetch({
      tracking_number: `%${searchText}%`,
      page: 1,
    });
  }

  function handlePagination(current: any) {
    refetch({
      tracking_number: `%${searchTerm}%`,
      page: current,
    });
  }

  async function handleExportOrder() {
    const { data } = await generateOrderExportUrlMutation({
      variables: {
        input: {
          ...(shopId && { shop_id: shopId }),
        },
      },
    });

    if (data?.generateOrderExportUrl) {
      router.push(data?.generateOrderExportUrl);
    }
  }

  if (
    !hasAccess(adminOnly, permissions) &&
    !myShop?.me?.shops?.map((shop: any) => shop.id).includes(shopId) &&
    myShop?.me?.managed_shop?.id != shopId
  ) {
    router.replace(Routes.dashboard);
  }

  return (
    <>
      <Card className="mb-8 flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0 md:w-1/4">
          <h1 className="text-lg font-semibold text-heading">
            {t('form:input-label-orders')}
          </h1>
        </div>

        <div className="flex w-full flex-col items-center ms-auto md:w-1/2 md:flex-row">
          <Search
            onSearch={handleSearch}
            placeholderText={t('form:input-placeholder-search-name')}
          />
        </div>

        <Menu
          as="div"
          className="relative inline-block ltr:text-left rtl:text-right"
        >
          <Menu.Button className="group p-2">
            <MoreIcon className="w-3.5 text-body" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="ul"
              className={classNames(
                'shadow-700 absolute z-50 mt-2 w-52 overflow-hidden rounded border border-border-200 bg-light py-2 focus:outline-none ltr:right-0 ltr:origin-top-right rtl:left-0 rtl:origin-top-left'
              )}
            >
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleExportOrder}
                    className={classNames(
                      'flex w-full items-center space-x-3 px-5 py-2.5 text-sm font-semibold capitalize transition duration-200 hover:text-accent focus:outline-none rtl:space-x-reverse ',
                      active ? 'text-accent' : 'text-body'
                    )}
                  >
                    <DownloadIcon className="w-5 shrink-0" />
                    <span className="whitespace-nowrap">
                      {t('common:text-export-orders')}
                    </span>
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </Card>

      <OrderList
        orders={data?.orders as any}
        onPagination={handlePagination}
        refetch={refetch}
      />
    </>
  );
}
Orders.authenticate = {
  permissions: adminOwnerAndStaffOnly,
};
Orders.Layout = ShopLayout;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['table', 'common', 'form'])),
  },
});
