import React, { Component } from "react";
 

class Chat extends Component {
	render() {
		return (
            <div class="container">
  <div class="row equal-height-grid">

    <div class="col l9 s12">

      <div class="card white">
        <div class="card-content">
          <span class="card-title">Jane Doe</span>
          <p>Currently Online</p>
        </div>

        <div class="divider"></div>

        <div class="card-content white">
          <div class="chat-wrapper">

            <div class="chat-message">
              <img class="circle" src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/portrait1.jpg?3877271780604206669" alt="avatar" />
              Lo-fi you probably haven't heard of them etsy leggings raclette kickstarter four dollar toast. Raw denim fingerstache food truck chia health goth synth. Forage man bun intelligentsia freegan PBR&amp;B banh mi asymmetrical chambray.
            </div>

            <div class="chat-message right">
              <img class="circle" src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/portrait2.jpg?3877271780604206669" alt="avatar" />
              Lo-fi you probably haven't heard of them.
            </div>
            <div class="chat-message right coalesce">
              etsy leggings raclette kickstarter four dollar toast.
            </div>
            <div class="chat-message right coalesce">
              Raw denim fingerstache food truck chia health goth synth. Forage man bun intelligentsia freegan PBR&amp;B banh mi asymmetrical chambray.
            </div>

            <div class="chat-message">
              <img class="circle" src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/portrait1.jpg?3877271780604206669" alt="avatar" />
              Raw denim fingerstache food truck chia health goth synth.
            </div>

          </div>
        </div>

        <div class="chat-input">
          <form action="">
            <div class="chat-input-bar">
              <textarea id="textarea1" class="materialize-textarea" style={{height: '72px'}}></textarea>
              <button type="submit">
                <i class="material-icons">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>

    <div class="col l3 s12">

      <div class="card white">
        <div class="card-content">
          <span class="card-title">Friends</span>
          <p>12 Friends online</p>
        </div>
        <ul class="collection flush">
          <li class="collection-item avatar active">
            <div class="badged-circle online">
              <img class="circle" src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/portrait1.jpg?3877271780604206669" alt="avatar" />
            </div>
            <span class="title">Jane Doe</span>
            <p class="truncate">Lo-fi you probably haven't heard of them</p>
          </li>

          <li class="collection-item avatar">
            <div class="badged-circle">
              <img class="circle" src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/portrait2.jpg?3877271780604206669" alt="avatar" />
            </div>
            <span class="title">John Chang</span>
            <p class="truncate">etsy leggings raclette kickstarter four dollar toast</p>
          </li>

          <li class="collection-item avatar">
            <div class="badged-circle">
              <img class="circle" src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/portrait3.jpg?3877271780604206669" alt="avatar" />
            </div>
            <span class="title">Lisa Simpson</span>
            <p class="truncate">Raw denim fingerstache food truck chia health goth synth</p>
          </li>

          <li class="collection-item avatar">
            <div class="badged-circle">
              <img class="circle" src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/portrait2.jpg?3877271780604206669" alt="avatar" />
            </div>
            <span class="title">Tobias Lee</span>
            <p class="truncate">Forage man bun intelligentsia freegan PBR&amp;B banh mi asymmetrical chambray.</p>
          </li>

          <li class="collection-item avatar">
            <div class="badged-circle">
              <img class="circle" src="//cdn.shopify.com/s/files/1/1775/8583/t/1/assets/portrait1.jpg?3877271780604206669" alt="avatar" />
            </div>
            <span class="title">Charlotte Doe</span>
            <p class="truncate">intelligentsia freegan PBR&amp;B banh mi asymmetrical chambray.</p>
          </li>
        </ul>
      </div>

    </div>

  </div>

</div>

		);
	}
}

export default Chat;
