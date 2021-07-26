import React from 'react';

class PokemonesTabla extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <table class="default">

  <tr>

    <td>Celda 1</td>

    <td>Celda 2</td>

    <td>Celda 3</td>

  </tr>

  <tr>

    <td>Celda 4</td>

    <td>Celda 5</td>

    <td>Celda 6</td>

  </tr>

</table>
         );
    }
}
 
export default PokemonesTabla;