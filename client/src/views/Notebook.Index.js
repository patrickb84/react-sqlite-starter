import { Notebooks } from '../data';

const NotebookIndex = () => {
  const tableHeaders = ['#', 'Name', 'Date Created', 'Last Written In'];

  return (
    <div className='container-fluid pt-5'>
      <h2 className='h1 mb-4 fw-normal'>
        <i className='fad fa-books me-1'></i> Notebooks
      </h2>
      <div className='card-'>
        {/* <div className='card-header'>
          <h2 className='h5 py-1 mb-0 fw-normal-'>
            <i className='fad fa-books me-1'></i> Notebooks
          </h2>
        </div> */}
        <div className='card-body-'>
          <table className='table table-hover'>
            <thead className="table-light">
              <tr>
                {tableHeaders.map((th, idx) => {
                  return <th key={idx}>{th}</th>;
                })}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Notebooks.map(notebook => {
                return (
                  <tr key={notebook.id}>
                    <td>{notebook.id}</td>
                    <td>{notebook.name}</td>
                    <td>{notebook.dateCreated}</td>
                    <td>{notebook.lastModifed}</td>
                    <td className='text-end'>
                      <button className='btn btn-sm btn-dark'>Edit</button>
                      <button className='btn btn-sm btn-dark ms-1'>
                        Archive
                      </button>
                      <button className='btn btn-sm btn-danger ms-1'>
                        <i className='fas fa-trash-alt'></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NotebookIndex;
