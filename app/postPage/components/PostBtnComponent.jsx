"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
// context, util, hooks import
import { AuthenticationContext } from "@/app/context/AuthContext";
import { PostDataContext } from "@/app/context/PostContext";
import { ImageDataContext } from "@/app/context/ImageContext";
import { imageUploadUtil } from "@/utils/imageUpload";
import usePostApi from "@/hooks/usePostApi";
// component, style import
import styles from "../postPage.module.css";

export default function PostBtnComponent() {
  const router = useRouter();
  const { data } = useContext(AuthenticationContext);
  const { postState } = useContext(PostDataContext);
  const { imageFile } = useContext(ImageDataContext);
  const { postDataFetchingApi } = usePostApi();

  console.log(postState)

  const handleClickPostAdd = async (e) => {
    e.preventDefault();

    try {
      // S3이미지 업로드
      const imageS3Upload = await imageUploadUtil(imageFile);

      const newData = {
        date: postState.date,
        title: postState.title,
        content: postState.content,
        image: imageS3Upload == null ? "/image/free.jpg" : imageS3Upload,
        user: data?.userid,
        createDate: new Date().getTime(),
      };

      if (
        postState.date == "" ||
        postState.title == "" ||
        postState.content == ""
      ) {
        alert("빈칸을 채워주세요");
        return;
      }
      
      // post작성 API
      const postResult = await postDataFetchingApi("new", newData);
      if (!postResult) throw new Error("포스트 작성에 문제가 발생하였습니다.");
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.postButtonBox}>
      <button className={styles.postButton} onClick={handleClickPostAdd}>
        글 작성
      </button>
    </div>
  )
}
