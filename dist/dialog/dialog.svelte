<script>import { fade } from "svelte/transition";
import { loader, resetLoader } from "./store/dialog.js";
import { DialogActions, DialogTheme } from "../types/dialog.js";
const handleAction = (action) => {
  const fn = $loader.popUp[action];
  if (fn && typeof fn === "function") {
    fn();
  }
  resetLoader();
};
$:
  verticalConfirm = $loader.popUp.verticalConfirm || false;
$:
  theme = $loader.popUp.theme || DialogTheme.DARK;
</script>

{#if $loader.showLoader}
  <div id="overlay" />
  <div transition:fade={{ duration: 100 }} class="positioned">
    {#if $loader.popUp.message}
      <div class={`popup popup--${$loader.popUp.type} popup--${theme}`}>
        <header class="flex-center gap-10">
          <img class="popup_img" src={`/logo/dialog_${$loader.popUp.type}.svg`} alt="">
          <p class="title">{$loader.popUp.title}</p>
        </header>
        <div class="popup_content flex-center gap-20">
          <span class="popup-message">{$loader.popUp.message}</span>
          {#if $loader.popUp.middleButton}
            <button class="popup__btn popup__btn--middle" style={`background-color: ${$loader.popUp.middleButtonColor || ''}`} on:click={() => handleAction(DialogActions.ONMIDDLE)}>{$loader.popUp.middleButton}</button>
          {/if}
          <div class="button__container flex-center {verticalConfirm && 'flex-col'} gap-20">
            {#if $loader.popUp.confirmButton && verticalConfirm}
            <button class={`popup__btn popup__btn--${$loader.popUp.type} popup__btn--${theme}`} style={`background-color: ${$loader.popUp.confirmButtonColor || ''}`} on:click={() => handleAction(DialogActions.ONCONFIRM)}>{$loader.popUp.confirmButton}</button>
            {/if}
            <button class={`popup__btn popup__btn--cancel popup__btn--${theme}`} style={`background-color: ${$loader.popUp.cancelButtonColor || ''}`} on:click={() => handleAction(DialogActions.ONCLOSE)}>{$loader.popUp.cancel}</button>
            {#if $loader.popUp.confirmButton && !verticalConfirm}
              <button class={`popup__btn popup__btn--${$loader.popUp.type} popup__btn--${theme}`} style={`background-color: ${$loader.popUp.confirmButtonColor || ''}`} on:click={() => handleAction(DialogActions.ONCONFIRM)}>{$loader.popUp.confirmButton}</button>
            {/if}
          </div>
        </div>
      </div>
    {:else}
      <svg class="loaderSpin" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke="{$loader.colorLoader}" stroke-width="5" stroke-opacity="0.3"/>
      </svg>
    {/if}
  </div>
{/if}

<style>

  :root {
    --color-success: #2DDD28;
    --color-warning: #ED942B;
    --color-info: #2B79ED;
    --color-error: #F46363;
  }
  #overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .positioned {
    width: 70vw;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;
  }

  .popup {
    max-width: 350px;
    max-height: 350px;
    padding: 10px;
    background-color: #1D1E22;
    color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .popup_header, .popup_content, .button__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button__container{
    width: 100%;
  }

  .popup_content{
    flex-direction: column;
  }

  .gap-10 {
    gap: 10px;
  }

  .gap-20 {
    gap: 20px;
  }

  .flex-col {
    flex-direction: column;
  }

  .title {
    margin: 5px;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .popup_img {
    width: 70px;
    height: 70px;
  }

  .popup-message {
    font-size: 12px;
    padding-left: 10px;
  }

  .popup__btn {
    width: 80%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .popup__btn--middle {
    width: 50%;
    background-color: rgb(220, 220, 220);
    color: black;
    transition: background-color 0.3s ease;
  }

  .popup__btn--middle:hover {
    background-color: rgb(186, 186, 186);
  }

  .popup__btn--success {
    background-color: #2DDD28;
    color: white;
  }

  .popup__btn--success:hover {
    background-color: #29c924;
  }

  .popup__btn--error {
    background-color: #F46363;
    color: white;
  }

  .popup__btn--error:hover {
    background-color: #e05757;
  }

  .popup__btn--warning {
    background-color: #ED942B;
    color: white;
  }

  .popup__btn--warning:hover {
    background-color: #d88526;
  }

  .popup__btn--info {
    background-color: #2B79ED;
    color: white;
  }

  .popup__btn--info:hover {
    background-color: #2670d9;
  }

  .popup__btn--cancel {
    background-color: rgb(220, 220, 220);
    color: black;
  }

  .popup__btn--cancel:hover {
    background-color: rgb(186, 186, 186);
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  .loaderSpin {
    width: 100px;
    height: 100px;
    animation: spin 1s linear infinite;
  }

  .path {
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  /*  light mode */

  .popup--light {
  background-color: #FFFFFF;
  color: #000000;
}

.popup__btn--middle--light {
  background-color: #EEEEEE;
  color: #000000;
}

.popup__btn--middle--light:hover {
  background-color: #E0E0E0;
}

.popup__btn--success--light {
  background-color: #90EE90;
  color: #000000;
}

.popup__btn--success--light:hover {
  background-color: #7CC57C;
}


.popup__btn--error--light {
  background-color: #FFB6B6;
  color: #000000;
}

.popup__btn--error--light:hover {
  background-color: #EAA9A9;
}


.popup__btn--warning--light {
  background-color: #FFD27A;
  color: #000000;
}

.popup__btn--warning--light:hover {
  background-color: #EBC265;
}


.popup__btn--info--light {
  background-color: #89CFF0;
  color: #000000;
}

.popup__btn--info--light:hover {
  background-color: #7BB8DA;
}


.popup__btn--cancel--light {
  background-color: #EEEEEE;
  color: #000000;
}

.popup__btn--cancel--light:hover {
  background-color: #E0E0E0;
}

.loaderSpin--light {
  stroke: #000000;
}

</style>
