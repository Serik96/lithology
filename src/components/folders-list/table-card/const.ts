export const formattedCardInfo = (
  grain: Nullable<number>,
  area: Nullable<number>,
  orientation: Nullable<number>,
) =>
  [
    { label: 'table.fields.grain', value: grain },
    {
      label: 'table.fields.area',
      value: area,
    },
    {
      label: 'table.fields.orientation',
      value: orientation,
    },
  ].filter(e => Boolean(e.value));
