
const initialState = [] as any[];

export const reducer = (state = initialState, action: any): any => {
  const copyState = [...state];
  switch (action.type) {
    case "LOAD_ACCOUNTS":
      return null;
    case "LOAD_ACCOUNTS_FAILURE":
      return null;
    case "LOAD_ACCOUNTS_SUCCESS":
      return [...copyState,...action.accountsState];
    case "CHANGE_ACCOUNT_TITLE":
      const index = copyState.findIndex(account => account.id === action.id);
      if (index) {
        copyState[index] = {...copyState[index], customTitle:action.customTitle}
      }
      return copyState;
    case "ADD_ACCOUNT":
      return [...copyState, {
        id: action.id,
        type:action.cardType,
        title:action.title
      }];
    case "REMOVE_EXTERNAL_ACCOUNT":
      return copyState.filter((item) => item.type!=='external' || (item.id !== action.id && item.type==='external'));

    default:
      return copyState;
  }
};
