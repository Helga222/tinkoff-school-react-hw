
export const loadAccountsAction = () => ({type:"LOAD_ACCOUNTS"});
export const addAccount = ({id,type:cardType,title}) =>  ({type:"ADD_ACCOUNT",id,cardType,title} as const);
export const loadAccountsFailureAction = () =>({type:"LOAD_ACCOUNTS_FAILURE"});
export const loadAccountsSuccess = (accountsState) =>({type:"LOAD_ACCOUNTS_SUCCESS",accountsState} as const);
export const changeAccountTitle = ({id,customTitle}) =>({type:"CHANGE_ACCOUNT_TITLE",id,customTitle} as const);
export const removeExternalAccount = ({id}) =>({type:"REMOVE_EXTERNAL_ACCOUNT",id} as const);

export const loadOperationsAction = () =>({type:"LOAD_OPERATIONS"} as const);
export const loadOperationsFailureAction = () =>({type:"LOAD_OPERATIONS_FAILURE"} as const);
export const loadOperationsSuccess = (operationsState) =>({type:"LOAD_OPERATIONS_SUCCESS",operationsState} as const);
