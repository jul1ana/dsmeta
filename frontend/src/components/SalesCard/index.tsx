import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../NotificationButton";
import "./styles.css";

function SalesCard() {
  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>

      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => { }}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => { }}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="showDesktop" >ID</th>
              <th className="show" >Data</th>
              <th>Vendedor(a)</th>
              <th className="showDesktop" >Visitas</th>
              <th className="showDesktop" >Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="showDesktop" >#221</td>
              <td className="show" >20/11/2022</td>
              <td>Juliana</td>
              <td className="showDesktop" >13</td>
              <td className="showDesktop" >10</td>
              <td>R$ 10500.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="showDesktop" >#221</td>
              <td className="show" >20/11/2022</td>
              <td>Juliana</td>
              <td className="showDesktop" >13</td>
              <td className="showDesktop" >10</td>
              <td>R$ 10500.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="showDesktop" >#221</td>
              <td className="show" >20/11/2022</td>
              <td>Juliana</td>
              <td className="showDesktop" >13</td>
              <td className="showDesktop" >10</td>
              <td>R$ 10500.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SalesCard