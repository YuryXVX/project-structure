const header = [
  {
    id: 'images',
    title: 'Фото',
    sortable: false,
    template: data => {
      return `
          <div class="sortable-table__cell">
            <img class="sortable-table-image" alt="Image" src="${data[0].url}">
          </div>
        `;
    }
  },
  {
    id: 'title',
    title: 'Название',
    sortable: true,
    sortType: 'string'
  },
  {
    id: 'subcategory',
    title: 'Категория',
    template: data => {
      const { title, category } = data;
      return (
        `<div class="sortable-table__cell">
          <span data-tooltip='
          <div class="sortable-table-tooltip">
          <span class="sortable-table-tooltip__category">${category.title}</span> /
          <b class="sortable-table-tooltip__subcategory">${title}</b>
          </div>'>${title}</span>
        </div>`
      );
    }
  },
  {
    id: 'quantity',
    title: 'Количество',
    sortable: true,
    sortType: 'number'
  },
  {
    id: 'price',
    title: 'Цена',
    sortable: true,
    sortType: 'number',
    template: data => {
      return `
          <div class="sortable-table__cell">
            $${data}
          </div>
        `;
    }
  },
  {
    id: 'sales',
    title: 'Продажи',
    sortable: true,
    sortType: 'number'
    },
];

export default header;
