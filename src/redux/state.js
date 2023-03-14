import userImage from "./../img/profileImg.jpg"
import post1 from "./../img/post1.jpg"
import postLike from "./../img/postLike.png"
import commentImg from "./../img/commentImg.png"
import post2Img from "./../img/post2Img.jpg"
import postImg2 from "./../img/postImg2.jpg"
import renderEntireTree from "../render";
import feedImg from "../img/feedimg.png";
import asideMassage from "../img/asideMassage.png";
import asideLike from "../img/asideLike.png";
import asidePhotos from "../img/asidePhotos.png";


let state = {
    massagesPage: {
        personObjects: [
            {id: 1, name: "Tigran"},
            {id: 2, name: "Lika"},
            {id: 3, name: "Grig"},
            {id: 4, name: "Alex"},
            {id: 5, name: "Arman"},
        ],
        massagesObjects: [
            {id: 1, massage: "Hello"},
            {id: 2, massage: "How are you"},
            {id: 3, massage: "Im fine"},
            {id: 4, massage: "You?"},
        ],
        newMassageText: "write massage"
    },
    feedPages: {
        posts: [
            {
                id: 1,
                postUserName: "Lika Zotova",
                postUserImg: post2Img,
                postDate: "20-01-2023",
                postImg: post1,
                postHeading: "Նայեք ինչ սիրուն հաֆոա!!",
                postDescription: "Ցեղատեսակն առաջացել է ճապոնական Հոնսյու կղզու հյուսիսում գտնվող" +
                    " համանուն Ակիտա պրեֆեկտուրայում։ Ինու՝ ճապոներեն նշանակում է շուն։ " +
                    "Հավանաբար այս ցեղատեսակի նախնիները եղել են չինական ծագումով շպիցները, " +
                    "որոնք խաչասերվել են մաստիֆների հետ։",
                postLikeCount: 120,
                likeIcon: postLike,
                postCommentCount: 30,
                commentIcon: commentImg,
            },
            {
                id: 2,
                postUserName: "Tiko Kazaryan",
                postUserImg: userImage,
                postDate: "18-01-2023",
                postImg: postImg2,
                postHeading: "самая красивая девушка в мире",
                postDescription: "Мне нравятся глаза твои,\n" +
                    "И рук на свете нет прекрасней!\n" +
                    "Твоей боюсь я красоты,\n" +
                    "Нет в мире красоты опасней!",
                postLikeCount: 320,
                likeIcon: postLike,
                postCommentCount: 180,
                commentIcon: commentImg,
            },
        ]
    },
    asidePage: [
        {
            id: 1,
            img: feedImg,
            itemName: "news feed",
            href: "/"
        },
        {
            id: 2,
            img: asideMassage,
            itemName: "messages",
            href: "/massages"
        },
        {
            id: 3,
            img: asideLike,
            itemName: "my likes",
            href: "/likes"
        },
        {
            id: 4,
            img: asidePhotos,
            itemName: "my photos",
            href: "/photos"
        },
    ]
}

export function addMessage(newMessages) {
    let newMessage = {
        id: 3,
        massage: newMessages,
    }
    state.massagesPage.massagesObjects.push(newMessage)
    renderEntireTree(state)
}

export function updateNewMassageText(newText) {
    state.massagesPage.newMassageText = newText
    renderEntireTree(state)
}


export default state