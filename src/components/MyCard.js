import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyCard({book}) {
  return (
    <Col md={4} xl={3} xxl={3}>
                <div class="card shadow h-100 border-0">
                    <img src={book.cover.uri} class="card-img-top" alt="course image" />
                    <div class="card-body pb-0">
                        <div class="d-flex justify-content-between mb-2">
                            <Link to={`/read/${book.id}`} className="badge bg-success bg-opacity-10 text-success text-decoration-none">{book.author}</Link>
                            <Link to={`/read/${book.id}`} className="h6 fw-light mb-0 text-decoration-none text-danger"><i class="fas fa-heart"></i></Link>
                        </div>
                        <h5 class="card-title"><Link to={`/read/${book.id}`} className="text-decoration-none">{book.title}</Link></h5>
                       
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                            <li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
                            <li class="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                        </ul>
                    </div>
                    <div class="card-footer pt-0 pb-3 border-0 bg-white">
                        <hr />
                        <div class="d-flex justify-content-between">
                            <span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>21h 22m</span>
                            <span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>30 lectures</span>
                        </div>
                    </div>
              
        </div>
    </Col>
  );
}

export default MyCard;