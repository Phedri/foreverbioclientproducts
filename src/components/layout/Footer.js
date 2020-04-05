import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div class="ps-home-contact">
          <div
            id="contact-map"
            data-address="New York, NY"
            data-title="BAKERY LOCATION!"
            data-zoom="17"
          ></div>
          <div class="ps-home-contact__form">
            <header>
              <h3>Contactez-nous!</h3>
              <p>
                Si vous avez besoin d'une quelconque information ou si vous
                voulez nous signaler un bug, n'hésitez pas à nous envoyer un
                message!
              </p>
            </header>
            <footer>
              <form action="product-listing.html" method="post">
                <div class="form-group">
                  <label>
                    Nom et Prénom<span>*</span>
                  </label>
                  <input class="form-control" type="text" />
                </div>
                <div class="form-group">
                  <label>
                    Adresse mail<span>*</span>
                  </label>
                  <input class="form-control" type="email" />
                </div>
                <div class="form-group">
                  <label>
                    Votre message<span>*</span>
                  </label>
                  <textarea class="form-control" rows="4"></textarea>
                </div>
                <div class="form-group text-center">
                  <button class="ps-btn">
                    Envoyer message<i class="fa fa-angle-right"></i>
                  </button>
                </div>
              </form>
            </footer>
          </div>
        </div>
        <div class="ps-subscribe">
          <div class="ps-container">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
                <h3>
                  <i class="fa fa-envelope"></i>
                  inscrivez-vous à la newsletter
                </h3>
              </div>
              <div class="col-lg-4 col-md-7 col-sm-12 col-xs-12 ">
                <form
                  class="ps-subscribe__form"
                  action="do_action"
                  method="post"
                >
                  <input class="form-control" type="text" placeholder="" />
                  <button>Inscription</button>
                </form>
              </div>
              <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12 ">
                <p>
                  ...et recevez un coupon de <span>75DH</span> pour votre
                  premier achat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="ps-footer bg--cover"
          data-background="images/background/parallax.jpg"
        >
          <div class="ps-footer__content">
            <div class="ps-container">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--info">
                    <header>
                      <h2 style={{ color: "white" }}>
                        Forever<span style={{ color: "#27b574" }}>BIO</span>
                      </h2>
                      <h3 class="ps-widget__title">Adresse 1</h3>
                    </header>
                    <footer>
                      <p>
                        <strong>Avenue Ibn Sina, Rabat Agdal, Maroc</strong>
                      </p>
                      <p>
                        Email:
                        <a href="mailto:support@store.com">
                          support@foreverbio.com
                        </a>
                      </p>
                      <p>Phone: +212 5377-71905</p>
                      <p>Fax: +212 32434 5333</p>
                    </footer>
                  </aside>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--info second">
                    <header>
                      <h3 class="ps-widget__title">Adresse 2</h3>
                    </header>
                    <footer>
                      <p>
                        <strong>
                          PO Box 16122 Collins Victoria 3000 Australia
                        </strong>
                      </p>
                      <p>
                        Email:
                        <a href="mailto:support@store.com">
                          support.technique@foreverbio.com
                        </a>
                      </p>
                      <p>Phone: +212 32434 5334</p>
                      <p>Fax: +212 32434 5333</p>
                    </footer>
                  </aside>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 class="ps-widget__title">Trouvez notre Magasin!</h3>
                    </header>
                    <footer>
                      <ul class="ps-list--link">
                        <li>
                          <a href="#">Code de coupons et réduction</a>
                        </li>
                        <li>
                          <a href="#">Enregistrez-vous à la newsletter</a>
                        </li>
                        <li>
                          <a href="#">Donnez-nous votre avis</a>
                        </li>
                        <li>
                          <a href="#">Voir les employés</a>
                        </li>
                      </ul>
                    </footer>
                  </aside>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 class="ps-widget__title">Aide</h3>
                    </header>
                    <footer>
                      <ul class="ps-list--line">
                        <li>
                          <a href="#">État de la commande</a>
                        </li>
                        <li>
                          <a href="#">Expédition et livraison</a>
                        </li>
                        <li>
                          <a href="#">Retours</a>
                        </li>
                        <li>
                          <a href="#">Options de paiement</a>
                        </li>
                        <li>
                          <a href="#">Contactez-nous</a>
                        </li>
                      </ul>
                    </footer>
                  </aside>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 class="ps-widget__title">Produits</h3>
                    </header>
                    <footer>
                      <ul class="ps-list--line">
                        <li>
                          <a href="#">Visage</a>
                        </li>
                        <li>
                          <a href="#">Cheveux</a>
                        </li>
                        <li>
                          <a href="#">Huile</a>
                        </li>
                        <li>
                          <a href="#">Peau</a>
                        </li>
                        <li>
                          <a href="#">Aliment</a>
                        </li>
                      </ul>
                    </footer>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div class="ps-footer__copyright">
            <div class="ps-container">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                  <p>
                    &copy; <a href="#">FOREVERBIO</a>
                  </p>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                  <ul class="ps-social">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
