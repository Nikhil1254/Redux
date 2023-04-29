const state = {
    account: { amount: 100 },
    bonus: { points: 10 }
}

const newState = {
    account: { ...state.account },
    bonus: { points: state.bonus.points + 1 }
}

console.log("State:", state);
console.log("newState:", newState);