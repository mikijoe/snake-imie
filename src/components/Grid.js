import React, { PureComponent } from 'react'
import Cell from "./Cell";

    const stylize = (props, state) => ({
        cell: {
            border:'1px solid black'
        }
    });

    const {rows, columns } = this.props;


    const Grid = (props)=> (
      <div style={stylize(props).cell}>
          { Array(rows).fill(true).map( (foo, x) => (
                  <div key={`rows-${x}`} style={styles.row}>
                      {Array(columns).fill(true).map((bar,y) => {
                              <Cell key={`cell-${x}`}/>
                            }
                      )}
                  </div>
              )
          )}
      </div>
    );


export default Grid