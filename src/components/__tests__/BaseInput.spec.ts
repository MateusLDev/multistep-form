import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import BaseInput from "../BaseInput.vue";

describe("BaseInput", () => {
  it("Render with props", () => {
    const props = { label: "Teste input", placeholder: "Test placeholer" };
    const wrapper = mount(BaseInput, { props });

    const label = wrapper.find("label");
    const placeholder = wrapper.find("input").element.placeholder;

    expect(label.text()).toMatch(props.label);
    expect(placeholder).toMatch(props.placeholder);
  });

  it("Show value if it is passed by props", () => {
    const props = { modelValue: "Base modelValue" };
    const wrapper = mount(BaseInput, { props });

    const inputValue = wrapper.find("input").element.value;

    expect(inputValue).toMatch(props.modelValue);
  });

  it("Modelvalue is updating when change input value", () => {
    const props = { modelValue: "Base modelValue" };
    const wrapper = mount(BaseInput, { props });

    const newInputModel = "test new model";

    const input = wrapper.find('input')

    expect(input.element.value).toMatch(props.modelValue)

    input.element.value = newInputModel

    expect(input.element.value).toMatch(newInputModel)
  });
});
