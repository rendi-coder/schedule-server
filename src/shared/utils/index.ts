import { Op, Order } from 'sequelize';

export const processWithSearchQuery = (
  whereQuery: any,
  fieldsToSearch: string[],
  search: string,
) => {
  whereQuery[Op.or] = fieldsToSearch.map((filed) => ({
    [filed]: {
      [Op.iLike]: `%${search}%`,
    },
  }));

  return whereQuery;
};

export const getOrderBy = (orderBy: string) => {
  const order: string[][] = [];

  if (orderBy) {
    orderBy.split('|').forEach((orderParam) => {
      const [field, direction] = orderParam.trim().split(',');

      if (field.includes('.')) {
        const associations = field.split('.');

        order.push([...associations, direction]);
      } else {
        order.push([field, direction]);
      }
    });
  }

  return order as Order;
};
