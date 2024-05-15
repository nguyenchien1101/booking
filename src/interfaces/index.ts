export interface ThongTinWeb {
  soDienThoai: string;
  email: string;
}
export interface HinhAnh {
  attributes: {
    url: string;
  };
}

export interface LoaiKhachSan {
  id: number;
  attributes: {
    ten: string;
    hinhAnh: HinhAnh;
    slug: string;
  };
}

export interface DiemDen {
  id: number;
  attributes: {
    ten: string;
    hinhAnh: { data: HinhAnh };
    slug: string;
  };
}

interface DanhGia {
  id: number;

  attributes: {
    moTa: string;
    diem: number;
    tieuDe: string;
  };
}
export interface KhachSan {
  id: number;
  sao: number;
  ten: string;
  moTa: string;
  diaChi: string;
  gioNhanPhong: string;
  gioTraPhong: string;
  hinhAnhKhachSan: {
    data: HinhAnh[];
  };
  tiennghi: string;
  loai_khach_san: { data: LoaiKhachSan };
  dienTich: number;
  diem_den: { data: DiemDen };
  danh_gias: { data: DanhGia[] };
  danhGia: number;
  anhBia: { data: HinhAnh };
  slug: string;
}
