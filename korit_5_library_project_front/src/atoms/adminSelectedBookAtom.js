import { atom } from "recoil";

// f리코일에 저장되는 실제 객체.

export const selectedBookState = atom({
    key: "selectedBookState",
    default: {
        bookId: 0,
        isbn: "",
        bookTypeId: 0,
        bookTypeName: "",
        categoryId: 0,
        categoryName: "",
        bookName: "",
        authorName: "",
        publisherName: "",
        coverImgUrl: ""
    }
});