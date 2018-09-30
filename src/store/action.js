import mutationType from "./mutation_type";
// 具有异步提交，和多重分发mutation的功能
const action={

  saveLoginState({commit,state},{username,address}) {
    commit(mutationType.SET_USERNAME,username)
    commit(mutationType.SET_ADDRESS,address)
  },
}


export default action;
