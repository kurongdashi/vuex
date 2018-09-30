import mutationType from "./mutation_type";
// 只能同步提交，保存和修改store 中的值
const mutation={
    [mutationType.SET_USERNAME](state,username){
      state.username=username;
    },
    [mutationType.SET_ADDRESS](state,address){
      state.address=address;
    }
}
export default mutation;
