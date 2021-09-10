import my_room from '../content/images/PXL_20210909_054609372.jpg';

const Home = () => {
  return (
    <div className='container-fluid w-100 h-100'>
      <div className='row h-100' style={{ position: 'relative' }}>
        <div
          className='col-md-6 h-100 bg-dark d-flex align-items-center justify-content-center text-light'
          style={{ position: 'fixed', left: 0 }}>
          <div className='text-center pb-4'>
            <i className='fad fa-transporter-2 fa-3x'></i>
            <h1 className='h2 pt-4 mt-1'>
              Collections <em>&</em> Madness
            </h1>
            <hr className='my-4 mx-5' />
            <small className='text-muted'>by Patrick J. Bradshaw</small>
          </div>
        </div>
        <div className='col-md-6 h-100 small ms-auto'>
          <div
            id='contents__page'
            className='h-100 d-flex flex-column justify-content-between p-md-5 p-3 mx-auto'
            style={{ maxWidth: 500 }}>
            <div
              style={{ alignSelf: 'start', paddingTop: '7rem' }}
              className='text-center w-100'>
              <i className='fal fa-galaxy fa-spin fa-3x text-warning'></i>
            </div>

            <div>
              <h2 className='text-center h4 mb-4'>
                <em>Contents</em>
              </h2>
              <hr className='mx-5' />
              <ul id='list__contents' className='list-unstyled leaders- mb-4'>
                <li className=''>
                  <span>Collections</span>
                  <span className='text-muted small' style={{ paddingTop: 2 }}>
                    9/10/21
                  </span>
                </li>

                <li className=''>
                  <span>Madness</span>
                  <span className='text-muted small' style={{ paddingTop: 2 }}>
                    9/12/21
                  </span>
                </li>

                <li className=''>
                  <span>Small Accumulations</span>
                  <span className='text-muted small' style={{ paddingTop: 2 }}>
                    10/20/21
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
