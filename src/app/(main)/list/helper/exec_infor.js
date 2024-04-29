function exec(key, List) {
  switch (key) {
    case "Tên":
      List.sort((a, b) => {
        if (a.diaChi < b.diaChi) {
          return -1;
        } else if (a.diaChi > b.diaChi) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case "Điểm số":
      List.sort((a, b) => {
        if (a.diaChi > b.diaChi) {
          return -1;
        } else if (a.diaChi < b.diaChi) {
          return 1;
        } else {
          return 0;
        }
      });
    default:
      List;
  }
}
