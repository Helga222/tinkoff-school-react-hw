import React from 'react';
import { mount, shallow } from 'enzyme';

import App from './App';
import Board from './components/Board/Board';
import * as request from './services/requestMock';
import accounts from './mocks/accountsMock.json';

let getAccounts;

describe('Интеграционный тест', () => {
  /*
   * Проверяем интеграцию модулей и загрузку данных
   * для загрузки данных необходимо в компоненте реализовать метод fetchAccounts, который будет
   * вызывать соответствующее API
   * */

  beforeEach(() => {
    getAccounts = jest.spyOn(request, 'getAccounts').mockReturnValue(
        Promise.resolve(accounts),
    );
  });

  it('Проверяем наличие списка аккаунтов Board', () => {
    const component = shallow(<App />);

    expect(component.find(Board).length).toBe(1);
  });

  it('После монтирования компонента происходит загрузка данных', () => {
    mount(<App />);

    expect(getAccounts).toHaveBeenCalled();
  });
});
