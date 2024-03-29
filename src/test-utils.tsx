import React from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { Tractor } from "@aircall/tractor";
import { queries, Queries } from "@testing-library/dom";

import MockedProvider from "./apollo/mocked-provider";

const AllTheProviders = ({ children }: any) => {
  return (
    <Tractor injectStyle={process.env.NODE_ENV !== "test"}>{children}</Tractor>
  );
};

const customRender = <
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement
>(
  ui: React.ReactElement,
  options?: RenderOptions<Q, Container>
): RenderResult<Q, Container> =>
  render(ui, { wrapper: AllTheProviders, ...(options ?? []) });

export * from "@testing-library/react";

export { customRender as render, MockedProvider };
