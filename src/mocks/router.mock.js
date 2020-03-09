import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

const renderWithRouter = (
    ui,
    {
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] }),
    } = {},
) => {
    const Wrapper = ({ children }) => <Router history={history}>{children}</Router>;
    return { ...render(ui, { wrapper: Wrapper }), history };
};

export default renderWithRouter;
