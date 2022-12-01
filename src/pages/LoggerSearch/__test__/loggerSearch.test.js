/* eslint-disable testing-library/prefer-find-by */
/* eslint-disable testing-library/no-wait-for-side-effects */
/**
 * @jest-environment jsdom
 */
import React from 'react'
import LoggerSearch from "../index.js"
import '@testing-library/jest-dom';
const { render, screen, waitFor } = require("../../../utils/test-utils")
const { setupServer } = require("msw/node");
const { requestHandlers } = require("./server-handler");
//use to get faker data

const server = setupServer(...requestHandlers);
beforeAll(() => server.listen());
jest.mock('../../../context', () => ({
    ...jest.requireActual('../../../context'),
    useAppDispatch: () => jest.fn(),
}))
test("Logger Search Input Test Case", async () => {
    render(<LoggerSearch />);
    expect(screen.getByText(/loading\.\.\./i)).toHaveTextContent("Loading...")
    await waitFor(() => expect(screen.getAllByTestId('row-userTest')).toHaveLength(1))
    await waitFor(() => expect(screen.getByRole('cell', {
        name: /906468196730134/i
    })).toBeInTheDocument())

});



afterAll(() => server.close());
