var initialState = [
  {
    avatar: "/images/groom.JPG",
    name: "Do Tuan Minh",
    age: "  26",
    address: "  Chung Hamlet, Hoa Xa, Ung Hoa, Ha Noi",
    mobile: '  01642264330',
    text: "  In this life we can no do great things. We can only do small things with great love"
  },
  {
    avatar: "/images/bride.jpg",
    name: "Phung Huong Ly",
    age: "  23",
    address: "  Thuong Doan Hamlet, Hoa Xa, Ung Hoa, Ha Noi",
    mobile: '  01642264330',
    text: "  A flower cannot blossom without sunshine, and man cannot live without love"
  }
];

const groomBride = (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default groomBride;
