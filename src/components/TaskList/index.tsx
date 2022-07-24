import React from "react"

export const TaskList = ({ tempId, eventClick }: any) => {
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>     
            </tr>
          </thead>
          <tbody>
            {Object.entries(tempId).map((item: any) => (
              <tr key={item[1]._id}>
                <td>{item[1].taskName}</td>         
                <td>
                  <button onClick={() => selection(item[1]._id)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody> 
        </table>
      </div>
    </div>
  )
}