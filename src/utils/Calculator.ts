const handleKeyPressed = (key: string, value: string, operationText: string): { value: string; operationText: string } => {
    if (key === 'AC') {
        return {
            value: '0',
            operationText: '0',
        }
    }
    if (key === '+/-') {
        return {
            value: (parseFloat(value) * -1).toString(),
            operationText: operationText,
        }
    }
    if (value === 'Infinity') {
        return {
            value: key,
            operationText: '0',
        }
    }
    if (value === '0') {
        return {
            value: key,
            operationText,
        }
    }
    if (key === '=') {
        return {
            value: calculate(value),
            operationText: value,
        }
    }
    if (key === 'x') {
        return {
            value: value + '*',
            operationText,
        }
    }
    return {
        value: value + key,
        operationText,
    }
}

const calculate = (value: string): string => {
    if (value.includes('%')) {
        return (parseFloat(value.split('%')[0]) / 100 * parseFloat(value.split('%')[1])).toString();
    }
    let result = 0;
    try {
        result = eval(value);
    } catch (error) {
        console.error('Error evaluating expression: ', error);
        result = 0;
    }
    return result.toString();
}

export {handleKeyPressed};