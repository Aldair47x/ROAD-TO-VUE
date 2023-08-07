import { shallowMount } from "@vue/test-utils";
import  Counter  from '../components/'


describe('Counter', () => {
    test('Debe incrementar en 1 y luego en -2 el valor del contador', () => {
        const wrapper = shallowMount(Counter)
    });
});