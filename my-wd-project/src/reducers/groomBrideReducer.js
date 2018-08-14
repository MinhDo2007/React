var initialState = [
  {
    avatar: "/images/image1.png",
    name: "Do Tuan Minh",
    text: "Mỗi năm của hôn nhân đều rất đặc biệt. Mỗi linh hồn đều hát những bài ca của tình yêu. Chúng tôi ước được nghe bản tình ca này mãi mãi."
  },
  {
    avatar: "/images/image1.png",
    name: "Phung Huong Ly",
    text: "Mỗi năm của hôn nhân đều rất đặc biệt. Mỗi linh hồn đều hát những bài ca của tình yêu. Chúng tôi ước được nghe bản tình ca này mãi mãi."
  }
];

const groomBride = (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default groomBride;
