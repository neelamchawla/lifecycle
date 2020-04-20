import React from 'react';
import Column from './15_Column';

export default function Table() {
  return (
    <React.Fragment>
        <table>
            <tbody>
                <tr>
                    <Column />
                </tr>
            </tbody>
        </table>
    </React.Fragment>
  );
}
