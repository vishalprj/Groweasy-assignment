import axios from "axios";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Banner } from "../api/data/bannerData";

 const fetchBannerData = async () => {
  const response = await axios.get('/api/banner');
  if (!response.data) {
    throw new Error('Response was not ok');
  }
  return response.data;
};

// hook for display AdBanner
export const useGetAdBanner = () => {
    return useQuery<Banner[]>(
        ['bannerData'], fetchBannerData
    )
}

const editBannerData = (data: any) => {
    return axios.patch('/api/editbanner', data)
}

// hook for updating AdBanner
export const useEditBanner = () => {
    const queryClient = useQueryClient()
    return useMutation(editBannerData,{
        onSuccess: () => {
            toast.success("Updated AdBanner Detail")
            queryClient.invalidateQueries('bannerData')
        },
        onError: () => {
            toast.error("Failed to Updated AdBanner Detail")
        }
    })
}


