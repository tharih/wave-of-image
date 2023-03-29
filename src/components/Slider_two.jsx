import React from 'react'

const Slider_two = () => {
  return (
    <section className="ds section_padding_70 gorizontal_padding">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12">
        <div
          className="owl-carousel top-models-carousel"
          data-margin={0}
          data-nav="true"
          data-loop="true"
          data-items={3}
          data-autoplay="false"
          data-responsive-xs={1}
          data-responsive-sm={2}
          data-responsive-md={2}
          data-responsive-lg={3}
        >
          <div>
            <div className="vertical-item maincarousel-item content-absolute">
              <div className="item-media">
                <img className="img_size_three" src="assets/images/1.jpg" alt="" />
                <div className="media-links"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="vertical-item maincarousel-item content-absolute">
              <div className="item-media">
                <img className="img_size_three" src="assets/images/3.jpg" alt="" />
                <div className="media-links"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="vertical-item maincarousel-item content-absolute">
              <div className="item-media">
                <img className="img_size_three" src="assets/images/03.jpg" alt="" />
                <div className="media-links"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="vertical-item maincarousel-item content-absolute">
              <div className="item-media">
                <img className="img_size_three" src="assets/images/04.jpg" alt="" />
                <div className="media-links"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="vertical-item maincarousel-item content-absolute">
              <div className="item-media">
                <img className="img_size_three" src="assets/images/05.jpg" alt="" />
                <div className="media-links"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row topmargin_50">
      <div className="col-xs-12 text-center margin_0">
        <div className="grey">
          <div className="pages bold" id="top_models_pagination">
            1 / 12
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Slider_two
