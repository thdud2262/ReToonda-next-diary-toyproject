"use client";
import React, { useState, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { createPortal } from "react-dom";
import Image from "next/image";
import modalStyles from '@/app/components/pageModalStyle.module.css'

export default function OptionModalButton() {
  const router = useRouter();
  const params = useParams();
  const id = decodeURIComponent(params.id);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleClickModal = (e) =>{
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  }

  const handleClickDelete = async () => {
    if (confirm("정말로 삭제하시겠습니까?")) {
      return fetch(`/api/post/delete?id=${id}`)
        .then((res) => res.json())
        .then((result) => {
          alert(result);
          router.push("/");
          router.refresh();
        });
    }
  };

  return (
    <>
      <button
        className={modalStyles.optionBtn}
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        <Image
          src="/icons/green_list.svg"
          alt="list-icon"
          width={30}
          height={30}
        />
      </button>
      {showModal &&
        createPortal(
          <div ref={modalRef} onClick={handleClickModal} className={modalStyles.modalOverlay}>
            <div className={modalStyles.modalBox}>
              <div className={modalStyles.modalMessageBox}>
                <button
                  onClick={() => {
                    router.push("/postPage");
                  }}
                >
                  새 글 작성하기
                </button>
                <button
                  onClick={() => {
                    router.push(`/editPage/${id}`);
                  }}
                >
                  수정하기
                </button>
                <button onClick={handleClickDelete}>삭제하기</button>
                <button
                  onClick={(e) => {
                    setShowModal(false);
                  }}
                >
                  취소하기
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
