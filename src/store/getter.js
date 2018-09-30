//将store 中的值取出，映射到vue组件中
const getter={
  getUserName:(state) => state.username,
  getAddress:(state)=> state.address

}

export default getter;

