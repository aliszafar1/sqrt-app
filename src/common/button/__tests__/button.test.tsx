import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Button from '../button';

describe('Button Component', () => {
    let renderer:any;
    beforeEach(() => {
        renderer = render(<Button disabled={false} placeholderText='Submit' loaderVisibility={false} />);
    });

    afterEach(() => {
        cleanup();
    });

    it('should render button component', () => {
        const {container} = renderer;
        expect(container.querySelector('button')).toBeInTheDocument();
    });
    
    it('should contain submit placeholderText', () => {
        const {getByText} = renderer;
        expect(getByText('Submit')).toBeInTheDocument();
    });
})