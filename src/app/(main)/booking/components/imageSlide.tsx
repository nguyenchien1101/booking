import { Carousel } from "@mantine/carousel";
import { KhachSan } from "@/interfaces";
import { axiosClient } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation"; // Import from next/navigation;
import { ImagePost } from "../../../../components/khach-san/chi-tiet/ImagePost";
function ImageSlide() {
  const query = useSearchParams();
  const newparams = query.get("phong");

  const { data } = useQuery({
    queryKey: ["khach-san", newparams],
    queryFn: async () => {
      const res = await axiosClient.get(
        `/api/khach-sans/${newparams}?populate=*`
      );
      return res?.data;
    },
  });
  const phong = data as KhachSan[];
  return (
    <div>
      <ImagePost imageList={data?.attributes?.hinhAnhKhachSan} />
    </div>
  );
}

export default ImageSlide;
