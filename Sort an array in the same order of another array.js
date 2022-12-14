function sortOrder(getOrder, getArr) {
  return getOrder.filter(function(order) {
    return getArr.some(function(list) {
      return order === list;
    });
  });
}

console.log(sortOrder(['name', "date", 'score', 'status'], ["date"]))
