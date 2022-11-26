import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import { fetchBook } from "./../redux/features/BookSlice";
import MyNavBar from "./MyNavBar";

const ReadBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let { id } = useParams()

    console.log(id);

    const { loading, book } = useSelector((state) => ({
        ...state.app1,
    }));

    const handleFetchBookByID = () => {
        // e.preventDefault();
        dispatch(fetchBook(id));
      };
    const goBackHome = () => {
        navigate("/")
    }
    useEffect(() => {
        handleFetchBookByID()
    }, [])

    return (
        <>
            <Container fluid className="p-0">
                <MyNavBar />
            </Container>
            <Container>
                
                <section className="pt-3 pt-xl-5">
                        <div className="row g-4">
                            <div className="col-xl-8">

                                <div className="row g-4">
                                    
                                    <div className="col-12">
                                        
                                        <h2>{book.title}</h2>
                                        <p>{book.description}</p>
                                        
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0"><i className="fas fa-star me-2"></i>4.5/5.0</li>
                                            <li className="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0"><i className="fas fa-user-graduate me-2"></i>12k Enrolled</li>
                                            <li className="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0"><i className="fas fa-signal me-2"></i>All levels</li>
                                            <li className="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0"><i className="bi bi-patch-exclamation-fill me-2"></i>Last updated 09/2021</li>
                                            <li className="list-inline-item fw-light h6"><i className="fas fa-globe me-2"></i>English</li>
                                        </ul>
                                    </div>
                                    
                    
                                    <div className="col-12">
                                        <div className="card border">
                                            
                                            <div className="card-header border-bottom">
                                                <h3 className="mb-0">Course description</h3>
                                            </div>
                                            
                                            <div className="card-body">
                                                <p className="mb-3">Welcome to the <strong> Digital Marketing Ultimate Course Bundle - 12 Courses in 1 (Over 36 hours of content)</strong></p>
                                                <p className="mb-3">In this practical hands-on training, you’re going to learn to become a digital marketing expert with this <strong> ultimate course bundle that includes 12 digital marketing courses in 1!</strong></p>
                                                <p className="mb-0">If you wish to find out the skills that should be covered in a basic digital marketing course syllabus in India or anywhere around the world, then reading this blog will help. Before we delve into the advanced <strong><a href="#" className="text-reset text-decoration-underline">digital marketing course</a></strong> syllabus, let’s look at the scope of digital marketing and what the future holds.</p>
                                                
                                                <div className="collapse" id="collapseContent">
                                                    <p className="my-3">We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course is packed with practical hands-on examples that you can follow step by step.</p>
                                                    <p className="mb-0">Behavioral psychology and influence triggers which are crucial for becoming a well rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course is packed with practical hands-on examples that you can follow step by step.</p>
                                                </div>
                                                
                                                <a className="p-0 mb-0 mt-2 btn-more d-flex align-items-center" data-bs-toggle="collapse" href="#collapseContent" role="button" aria-expanded="false" aria-controls="collapseContent">
                                                    See <span className="see-more ms-1">more</span><span className="see-less ms-1">less</span><i className="fas fa-angle-down ms-2"></i>
                                                </a>
                    
                                                
                                                <h5 className="mt-4">What you ll learn</h5>
                                                <div className="row mb-3">
                                                    <div className="col-md-6">
                                                        <ul className="list-group list-group-borderless">
                                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Digital marketing course introduction</li>
                                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Customer Life cycle</li>
                                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>What is Search engine optimization(SEO)</li>
                                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Facebook ADS</li>
                                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Facebook Messenger Chatbot</li>
                                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Search engine optimization tools</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list-group list-group-borderless">
                                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Why SEO</li>
                                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>URL Structure</li>
                                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Featured Snippet</li>
                                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>SEO tips and tricks</li>
                                                            <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Google tag manager</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p className="mb-0">As it so contrasted oh estimating instrument. Size like body some one had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. </p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div className="card border rounded-3">
                                        
                                            <div className="card-header border-bottom">
                                                <h3 className="mb-0">Curriculum</h3>
                                            </div>
                                            
                                            <div className="card-body">
                                                <div className="row g-5">
                                                    
                                                    <div className="col-12">
                                                        
                                                        <h5 className="mb-4">Introduction of Digital Marketing (3 lectures)</h5>
                                                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                            <div className="d-flex">
                                                                <a href="#" className="btn btn-danger-soft btn-round mb-0"><i className="fas fa-play"></i></a>
                                                                <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">	
                                                                    <h6 className="mb-0">Introduction</h6>
                                                                    <p className="mb-2 mb-sm-0 small">10m 56s</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <a href="#" className="btn btn-sm btn-success mb-0">Play</a>
                                                        </div>
                                                    
                                                        <hr />
                        
                                                        
                                                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                            <div className="d-flex">
                                                                <a href="#" className="btn btn-danger-soft btn-round mb-0 flex-shrink-0"><i className="fas fa-play"></i></a>
                                                                <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">	
                                                                    <h6 className="mb-0">What is Digital Marketing</h6>
                                                                    <p className="mb-2 mb-sm-0 small">18m 30s</p>
                                                                </div>
                                                            </div>
                                                        
                                                            <a href="#" className="btn btn-sm btn-success mb-0">Play</a>
                                                        </div>
                                                        
                        
                                                        
                                                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                            <div className="d-flex">
                                                                <a href="#" className="btn btn-light btn-round mb-0 flex-shrink-0"><i className="bi bi-lock-fill"></i></a>
                                                                <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">	
                                                                    <h6 className="mb-0">Type of Digital Marketing</h6>
                                                                    <p className="mb-2 mb-sm-0 small">22m 26s</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <a href="#" className="btn btn-sm btn-orange mb-0">Premium</a>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-12">
                                                        
                                                        <h5 className="mb-4">Customer Life cycle (4 lectures)</h5>
                                                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                            <div className="d-flex">
                                                                <a href="#" className="btn btn-danger-soft btn-round mb-0 flex-shrink-0"><i className="fas fa-play"></i></a>
                                                                <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">	
                                                                    <h6 className="mb-0">What is Digital Marketing</h6>
                                                                    <p className="mb-2 mb-sm-0 small">10m 56s</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <a href="#" className="btn btn-sm btn-success mb-0">Play</a>
                                                        </div>
                                                        
                                                        <hr />
                        
                                                        
                                                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                            <div className="d-flex">
                                                                <a href="#" className="btn btn-danger-soft btn-round mb-0 flex-shrink-0"><i className="fas fa-play"></i></a>
                                                                <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">	
                                                                    <h6 className="mb-0">15 Tips for Writing Magnetic Headlines</h6>
                                                                    <p className="mb-2 mb-sm-0 small">18m 30s</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <a href="#" className="btn btn-sm btn-success mb-0">Play</a>
                                                        </div>
                                                        <hr />
                    
                                                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                            <div className="d-flex">
                                                                <a href="#" className="btn btn-light btn-round mb-0 flex-shrink-0"><i className="bi bi-lock-fill"></i></a>
                                                                <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">	
                                                                    <h6 className="mb-0">How to Flip Features Into Benefits</h6>
                                                                    <p className="mb-2 mb-sm-0 small">18m 26s</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="btn btn-sm btn-orange mb-0">Premium</a>
                                                        </div>
                                            
                                            
                                                    <div className="col-12">
                                                
                                                        <h5 className="mb-4">What is Search Engine Optimization(SEO) (5 lectures)</h5>
                                                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                            <div className="d-flex">
                                                                <a href="#" className="btn btn-danger-soft btn-round mb-0 flex-shrink-0"><i className="fas fa-play"></i></a>
                                                                <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">	
                                                                    <h6 className="mb-0">How to SEO Optimise Your Homepage</h6>
                                                                    <p className="mb-2 mb-sm-0 small">18m 21s</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="btn btn-sm btn-success mb-0">Play</a>
                                                        </div>
                                                        
                                                        <hr />
                        
                                                        
                                                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                            <div className="d-flex">
                                                                <a href="#" className="btn btn-danger-soft btn-round mb-0 flex-shrink-0"><i className="fas fa-play"></i></a>
                                                                <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">	
                                                                    <h6 className="mb-0">How to Write Title Tags Search Engines Love</h6>
                                                                    <p className="mb-2 mb-sm-0 small">7m 30s</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <a href="#" className="btn btn-sm btn-success mb-0">Play</a>
                                                        </div>
                                                        
                                                        <hr />

                                                        
                                                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                            <div className="d-flex">
                                                                <a href="#" className="btn btn-danger-soft btn-round mb-0 flex-shrink-0"><i className="fas fa-play"></i></a>
                                                                <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">	
                                                                    <h6 className="mb-0">SEO Keyword Planning</h6>
                                                                    <p className="mb-2 mb-sm-0 small">15m 32s</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <a href="#" className="btn btn-sm btn-success mb-0">Play</a>
                                                        </div>
                                                        
                                                        <hr />
                                                    
                                                    </div>
                                                    <div className="collapse mt-0" id="collapseCourse">
                                                
                                                        <div className="col-12 mt-5">
                                                            
                                                            <h5 className="mb-4">YouTube Marketing (5 lectures)</h5>
                                                            <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                                <div className="d-flex">
                                                                    <a href="#" className="btn btn-danger-soft btn-round mb-0 flex-shrink-0"><i className="fas fa-play"></i></a>
                                                                    <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">	
                                                                        <h6 className="mb-0">Video Flow</h6>
                                                                        <p className="mb-2 mb-sm-0 small">25m 20s</p>
                                                                    </div>
                                                                </div>
                                                                
                                                                <a href="#" className="btn btn-sm btn-success mb-0">Play</a>
                                                            </div>
                                                            
                                                            <hr />

                                                            <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                                <div className="d-flex">
                                                                    <a href="#" className="btn btn-light btn-round mb-0 flex-shrink-0"><i className="bi bi-lock-fill"></i></a>
                                                                    <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">	
                                                                        <h6 className="mb-0">Channel Analytics</h6>
                                                                        <p className="mb-2 mb-sm-0 small">18m 20s</p>
                                                                    </div>
                                                                </div>
                                                        
                                                                <a href="#" className="btn btn-sm btn-orange mb-0">Premium</a>
                                                            </div>
                                                            <hr />
                                                            <div className="d-sm-flex justify-content-sm-between align-items-center">
                                                                <div className="d-flex">
                                                                    <a href="#" className="btn btn-light btn-round mb-0 flex-shrink-0"><i className="bi bi-lock-fill"></i></a>
                                                                    <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">	
                                                                        <h6 className="mb-0">Managing Comments</h6>
                                                                        <p className="mb-2 mb-sm-0 small">20m 20s</p>
                                                                    </div>
                                                                </div>
                                                                
                                                                <a href="#" className="btn btn-sm btn-orange mb-0">Premium</a>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                    <a className="mb-0 mt-4 btn-more d-flex align-items-center justify-content-center" data-bs-toggle="collapse" href="#collapseCourse" role="button" aria-expanded="false" aria-controls="collapseCourse">
                                                        See <span className="see-more mx-1">more</span><span className="see-less mx-1">less</span> video<i className="fas fa-angle-down ms-2"></i>
                                                    </a>

                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card border rounded-3">
                                        
                                            <div className="card-header border-bottom">
                                                <h3 className="mb-0">Frequently Asked Questions</h3>
                                            </div>
                                            
                                            <div className="card-body">
                                                
                                                <div>
                                                    <h6>How Digital Marketing Work?</h6>
                                                    <p className="mb-0">Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving agreement perceived at an. Comfort reached gay perhaps chamber his six detract besides add.</p>
                                                </div>
                                    
                                            
                                                <div className="mt-4">
                                                    <h6>What is SEO?</h6>
                                                    <p className="mb-0">Meant balls it if up doubt small purse. Required his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible.</p>
                                                    <p className="mt-2 mb-0">Person she control of to beginnings view looked eyes Than continues its and because and given and shown creating curiously to more in are man were smaller by we instead the these sighed Avoid in the sufficient me real man longer of his how her for countries to brains warned notch important Finds be to the of on the increased explain noise of power deep asking contribution this live of suppliers goals bit separated poured sort several the was organization the if relations go work after mechanic But we've area wasn't everything needs of and doctor where would a of</p>
                                                </div>
                                    
                                                
                                                <div className="mt-4">
                                                    <h6>Who should join this course?</h6>
                                                    <p className="mb-0">Two before narrow not relied how except moment myself Dejection assurance mrs led certainly So gate at no only none open Betrayed at properly it of graceful on Dinner abroad am depart ye turned hearts as me wished Therefore allowance too perfectly gentleman supposing man his now Families goodness all eat out bed steepest servants Explained the incommode sir improving northward immediate eat Man denoting received you sex possible you Shew park own loud son door less yet </p>
                                                </div>
                                    
                                            
                                                <div className="mt-4">
                                                    <h6>What are the T&amp;C for this program?</h6>
                                                    <p className="mb-0">Started several mistake joy say painful removed reached end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. Course regard to up he hardly. View four has said do men saw find dear shy. Talent men wicket add garden. </p>
                                                    </div>
                                    
                                                
                                                <div className="mt-4">
                                                    <h6>What certificates will I be received for this program?</h6>
                                                    <p className="mb-0">Lose john poor same it case do year we Full how way even the sigh Extremely nor furniture fat questions now provision incommode preserved Our side fail to find like now Discovered traveling for insensible partiality unpleasing impossible she Sudden up my excuse to suffer ladies though or Bachelor possible Marianne directly confined relation as on he </p>
                                                </div>
                                    
                                                
                                                <div className="mt-4">
                                                    <h6>What happens after the trial ends?</h6>
                                                    <p className="mb-0">Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him.  Suspicion neglected he resolving agreement perceived at an. Comfort reached gay perhaps chamber his six detract besides add.</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div> 
                            <div className="col-xl-4">
                                <div data-sticky="" data-margin-top="80" data-sticky-for="768">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-xl-12">
                                            
                                            <div className="card card-body border p-4">
                                                
                                                <div className="d-flex justify-content-between align-items-center">
                                                    
                                                    <h3 className="fw-bold mb-0 me-2">$295.55</h3>
                                                    
                                                    <div className="dropdown">
                                                        <a href="#" className="btn btn-sm btn-light rounded mb-0 small" role="button" id="dropdownShare" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fas fa-fw fa-share-alt"></i>
                                                        </a>
                                                        
                                                        <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare">
                                                            <li><a className="dropdown-item" href="#"><i className="fab fa-twitter-square me-2"></i>Twitter</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fab fa-facebook-square me-2"></i>Facebook</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fab fa-linkedin me-2"></i>LinkedIn</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fas fa-copy me-2"></i>Copy link</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mt-3 d-grid">
                                                    <a href="#" className="btn btn-outline-primary mb-2">Add to cart</a>
                                                    <a href="#" className="btn btn-success">Buy now</a>
                                                </div>
                                                <hr />
                                                <h5 className="mb-3">This course includes</h5>
                                                <ul className="list-group list-group-borderless border-0">
                                                    <li className="list-group-item px-0 d-flex justify-content-between">
                                                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-book-open text-primary"></i>Lectures</span>
                                                        <span>30</span>
                                                    </li>
                                                    <li className="list-group-item px-0 d-flex justify-content-between">
                                                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-clock text-primary"></i>Duration</span>
                                                        <span>4h 50m</span>
                                                    </li>
                                                    <li className="list-group-item px-0 d-flex justify-content-between">
                                                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-signal text-primary"></i>Skills</span>
                                                        <span>Beginner</span>
                                                    </li>
                                                    <li className="list-group-item px-0 d-flex justify-content-between">
                                                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-globe text-primary"></i>Language</span>
                                                        <span>English</span>
                                                    </li>
                                                    <li className="list-group-item px-0 d-flex justify-content-between">
                                                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-user-clock text-primary"></i>Deadline</span>
                                                        <span>Nov 30 2021</span>
                                                    </li>
                                                    <li className="list-group-item px-0 d-flex justify-content-between">
                                                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-medal text-primary"></i>Certificate</span>
                                                        <span>Yes</span>
                                                    </li>
                                                </ul>
                                                <hr />
                                                <div className="d-sm-flex align-items-center">
                                                    
                                                    <div className="avatar avatar-xl">
                                                        <img className="avatar-img rounded-circle " src="" alt="avatar" width={80}/>
                                                    </div>
                                                    <div className="ms-sm-3 mt-2 mt-sm-0">
                                                        <h5 className="mb-0"><a href="#">By Jacqueline Miller</a></h5>
                                                        <p className="mb-0 small">Founder Eduport company</p>
                                                    </div>
                                                </div>
                                                <div className="d-sm-flex justify-content-sm-between align-items-center mt-0 mt-sm-2">
                                                    
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                                        <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                                        <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                                                    </ul>
                                                    <button className="btn btn-sm btn-primary mb-0 mt-2 mt-sm-0">Follow</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-6 col-xl-12">
                                            <div className="card card-body border p-4">
                                                <h4 className="mb-3">Popular Tags</h4>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">blog</a> </li>
                                                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">business</a> </li>
                                                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">theme</a> </li>
                                                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">bootstrap</a> </li>
                                                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">data science</a> </li>
                                                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">web development</a> </li>
                                                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">tips</a> </li>
                                                    <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">machine learning</a> </li>
                                                </ul>
                                            </div>	
                                        </div>
                                        
                                    </div>
                                </div>	
                            </div> 
                        </div>

                </section>

                <button onClick={goBackHome}>Go To Home</button>
                
            </Container>
        </>
    )

}

export default ReadBook