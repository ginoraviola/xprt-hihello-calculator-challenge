import 'react-native';
import React from 'react';

import {handleKeyPressed} from "../src/utils/Calculator";

describe('CalculatorScreen tests', () => {
    it('processes long calculation', () => {
        const result = handleKeyPressed('=', '21*391-39', '0');
        expect(result).toEqual({value: '8172', operationText: '21*391-39'});
    });

    it('processes long calculation with decimal', () => {
        const result = handleKeyPressed('=', '21*391-39.1', '0');
        expect(result).toEqual({value: '8171.9', operationText: '21*391-39.1'});
    });

    it('processes long calculation with decimal and negative', () => {
        const result = handleKeyPressed('=', '21*391-39.1-1', '0');
        expect(result).toEqual({value: '8170.9', operationText: '21*391-39.1-1'});
    })

    it('processes divisions', () => {
        let result = handleKeyPressed('=', '21/3', '0');
        expect(result).toEqual({value: '7', operationText: '21/3'});

        result = handleKeyPressed('=', '1/1', '0');
        expect(result).toEqual({value: '1', operationText: '1/1'});

        result = handleKeyPressed('=', '1/0', '0');
        expect(result).toEqual({value: 'Infinity', operationText: '1/0'});
    });

    it('If result is infinity - it gets reset after any key pressed', () => {
        let result = handleKeyPressed('2', 'Infinity', '1/0');
        expect(result).toEqual({value: '2', operationText: '0'});
    })

    it('percentages are calculated properly', () => {
        let result = handleKeyPressed('=', '21%3', '0');
        expect(result).toEqual({value: '0.63', operationText: '21%3'});

        result = handleKeyPressed('=', '21%0', '0');
        expect(result).toEqual({value: '0', operationText: '21%0'});
    })
});