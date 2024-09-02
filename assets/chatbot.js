var content = `
<div class="nld-chatbot-bg"></div>

<div id="nld-chatbot">
    <template>
        <div class="nld-chatbot nld-right">

            <div class="nld-avatar nld-shown-slide" v-bind:style="{ 'background-image': 'url(' + broker.image + ')' }" v-if="nld_conversation_avatar_show">
                <div style="position:absolute; left: 0; width: 60px; height: 60px;" @click="open_form()"></div>
                <div class="nld-chatbot-invite-container nld-shown-middle">
                    <div class="nld-chatbot-invite-message nld-shown" v-show="chatbot_invite_message">
                        <div class="nld-close" v-if="show_message_apresentation">
                            <img :src="close_icon" class="nld-close-white" @click="hidden_broker_message()">
                        </div>
                        <div class="nld-invite-message-container" @click="open_form()">
                            <div class="nld-invite-message-text nld-shown">
                                <p v-if="show_message_apresentation" v-html="broker.description">{{ broker.description }}</p>
                            </div>
                            <div class="nld-footer nld-time"></div>
                        </div>
                        <div class="nld-typing-indicator" v-if="!show_message_apresentation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="nld-clear"></div>
                    </div>
                </div>
            </div>


            <div class="nld-conversation nld-shown-slide" v-show="nld_conversation_form_show">
                <div class="nld-bg">

                    <div class="nld-conversation-header">
                        <div class="nld-close" @click="close_form()">
                            <img :src="close_icon" class="nld-close-white">
                        </div>
                        <img class="nld-3rdparty-branding" alt="">
                        <div class="nld-infobar">
                            <div class="nld-avatar" v-bind:style="{ 'background-image': 'url(' + broker.image + ')' }"></div>
                            <div class="nld-info">
                                <div class="nld-title">{{ broker.name }}</div>
                                <div class="nld-subtitle">Online agora</div>
                            </div>
                        </div>
                    </div>

                    <div id="context" class="nld-ctx">
                        <div>
                            <div class="nld-container nld-full">
                                <div class="nld-scrollable scrollscreen" style="overflow-y: scroll;">
                                    <div class="nld-whitespace"></div>

                                    <div class="nld-group nld-left">
                                        <div class="nld-msg-avatar">
                                            <img class="nld-img" :src="broker.image" alt="Avatar">
                                        </div>
                                        <div class="nld-container">
                                            <div class="nld-msg" id="message-hello">
                                                <div class="nld-bubble loading">
                                                    <div class="nld-typing-indicator">
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                    </div>
                                                </div>
                                                <div class="nld-bubble message">
                                                    <p>Olá, Seja Bem Vindo(a) ao ebimob!</p>
                                                    <div class="nld-clear"></div>
                                                </div>
                                            </div>
                                            <div class="nld-msg" id="message-lets-find" style="display: none;">
                                                <div class="nld-bubble loading">
                                                    <div class="nld-typing-indicator">
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                    </div>
                                                </div>
                                                <div class="nld-bubble message">
                                                    <p>{{ broker.message }}</p>
                                                    <div class="nld-sel nld-messages" v-if="stage_flow == 0">
                                                        <a :href="'https://api.whatsapp.com/send?phone=' + broker.cellphone + '&text=Preciso de ajuda para montar minha imobiliária de forma gratuita.'" class="nld-opt" style="text-decoration: none;">Fale comigo AGORA!</a>
                                                    </div>
                                                    <div class="nld-clear"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nld-clear"></div>
                                    </div>

                                    <div class="nld-group nld-right" v-show="start_now">
                                        <div class="nld-container">
                                            <div class="nld-msg">
                                                <div class="nld-bubble">
                                                    <div>
                                                        <div>Sim, começar agora</div>
                                                        <div class="nld-clear"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nld-clear"></div>
                                    </div>

                                    <div class="nld-group nld-left" v-if="input_new_more_info">
                                        <div class="nld-msg-avatar">
                                            <img class="nld-img" :src="broker.image">
                                        </div>
                                        <div class="nld-container">
                                            <div class="nld-msg" v-if="input_new_more_info" id="message-start-now">
                                                <div class="nld-bubble loading">
                                                    <div class="nld-typing-indicator">
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                    </div>
                                                </div>
                                                <div class="nld-bubble message">
                                                    <p>Para isso preciso de algumas informações rápidas 🙂</p>
                                                    <div class="nld-clear"></div>
                                                </div>
                                            </div>
                                            <div class="nld-msg" id="message-your-cellphone" style="transition: 3s;">
                                                <div class="nld-bubble loading">
                                                    <div class="nld-typing-indicator">
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                    </div>
                                                </div>
                                                <div class="nld-bubble message">
                                                    <p>Qual é o seu telefone?</p>
                                                    <div class="nld-clear"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nld-clear"></div>
                                    </div>
                                    <div class="nld-group nld-right" v-if="lead.cellphone">
                                        <div class="nld-container">
                                            <div class="nld-msg">
                                                <div class="nld-bubble">
                                                    <div>
                                                        <p>{{ this.lead.cellphone }}</p>
                                                        <div class="nld-clear"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nld-clear"></div>
                                    </div>
                                    <div class="nld-group nld-left" v-if="lead.cellphone">
                                        <div class="nld-msg-avatar">
                                            <img class="nld-img" :src="broker.image" alt="Avatar">
                                        </div>
                                        <div class="nld-container">
                                            <div class="nld-msg" id="message-your-name">
                                                <div class="nld-bubble loading">
                                                    <div class="nld-typing-indicator">
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                    </div>
                                                </div>

                                                <div class="nld-bubble message">
                                                    <p>Estamos quase lá. Qual é seu nome?</p>
                                                    <div class="nld-clear"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nld-clear"></div>
                                    </div>
                                    <div class="nld-group nld-right" v-if="lead.name">
                                        <div class="nld-container">
                                            <div class="nld-msg">
                                                <div class="nld-bubble">
                                                    <div>
                                                        <p>{{ lead.name }}</p>
                                                        <div class="nld-clear"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nld-clear"></div>
                                    </div>
                                    <div class="nld-group nld-left" v-if="lead.name">
                                        <div class="nld-msg-avatar">
                                            <img class="nld-img" :src="broker.image">
                                        </div>
                                        <div class="nld-container">
                                            <div class="nld-msg" id="message-great-name">
                                                <div class="nld-bubble loading">
                                                    <div class="nld-typing-indicator">
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                    </div>
                                                </div>
                                                <div class="nld-bubble message">
                                                    <p>Ótimo, {{ lead.name }}</p>
                                                    <div class="nld-clear"></div>
                                                </div>
                                            </div>
                                            <div class="nld-msg" id="message-your-email">
                                                <div class="nld-bubble loading">
                                                    <div class="nld-typing-indicator">
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                    </div>
                                                </div>
                                                <div class="nld-bubble message">
                                                    <p>Poderia informar seu e-mail?</p>
                                                    <div class="nld-clear"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nld-clear"></div>
                                    </div>
                                    <div class="nld-group nld-right" v-if="lead.email">
                                        <div class="nld-container">
                                            <div class="nld-msg">
                                                <div class="nld-bubble">
                                                    <div>
                                                        <p>{{ lead.email }}</p>
                                                        <div class="nld-clear"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nld-clear"></div>
                                    </div>
                                    <div class="nld-group nld-left" v-if="show_options_selection()">
                                        <div class="nld-msg-avatar">
                                            <img class="nld-img" :src="broker.image">
                                        </div>
                                        <div class="nld-container">
                                            <div class="nld-msg" id="message-select-option">
                                                <div class="nld-bubble loading">
                                                    <div class="nld-typing-indicator">
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                        <span style="background: rgb(170, 170, 170);"></span>
                                                    </div>
                                                </div>
                                                <div class="nld-bubble message">
                                                    <p>Você deseja Comprar o seu imóvel em {{ broker.city }}?</p>
                                                    <div class="nld-clear"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nld-clear"></div>
                                    </div>
                                    <div class="nld-group nld-right message" id="message-select-option-user">
                                        <div class="nld-container">
                                            <div class="nld-msg" v-for="i in broker.options" v-show="show_option(i)">
                                                <div class="nld-bubble" style="text-align: left;">
                                                    <div style="cursor: pointer;" @click="set_lead_interest(i)" @keyup.enter="set_lead_interest('undefined')">{{ i }}</div>
                                                    <div class="nld-clear"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nld-clear"></div>
                                    </div>
                                    <div class="nld-group nld-left" v-if="lead.interest">
                                        <div class="nld-msg-avatar">
                                            <img class="nld-img" :src="broker.image">
                                        </div>
                                        <div class="nld-container">
                                            <div class="nld-msg">
                                                <div class="nld-bubble">
                                                    <div>
                                                        <p>Ótimo! Obrigado pelas informações, em breve entrarei em contato você.</p>
                                                        <div class="nld-clear"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nld-msg">
                                                <div class="nld-bubble">
                                                    <div>
                                                        <p>Quer falar comigo agora mesmo?</p>
                                                        <a :href="send_message_whatsapp()">Falar por WhatsApp</a>
                                                        <div class="nld-clear"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nld-clear"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="nld-overlay"></div>
                        </div>
                    </div>
                </div>
                <div class="nld-popup-container nld-nodisplay">
                    <div class="nld-popup"></div>
                </div>
            </div>
        </div>
    </template>
</div>
<style>
    .nld-chatbot {
        display: block;
    }

    .modal-open .nld-chatbot {
        display: none;
    }

    .loading,
    .message {
        display: none !important;
    }

    .loading.active,
    .message.active {
        display: inline-block !important;
    }

    .nld-chatbot-bg {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .8);
        z-index: 999;
        display: none;
    }

    .nld-icon {
        font-family: neurolead !important;
    }

    /* Animations */

    @keyframes nld-fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes nld-pop-in {
        from {
            opacity: 0;
            transform: scale(0, 0);
        }
        to {
            opacity: 1;
            transform: scale(1, 1);
        }
    }

    @keyframes nld-super-pop-in {
        0% {
            opacity: 0;
            transform: scale(0, 0);
        }
        30% {
            opacity: 1;
            background-color: white;
            transform: scale(1.5, 1.5);
        }
        80% {
            transform: scale(1, 1);
        }
        100% {
            opacity: 1;
            transform: scale(1, 1);
        }
    }

    @keyframes nld-pop-in-middle {
        from {
            opacity: 0;
            transform: translateY(-50%) scale(0, 0);
        }
        to {
            opacity: 1;
            transform: translateY(-50%) scale(1, 1);
        }
    }

    @keyframes nld-pop-out {
        from {
            opacity: 1;
            transform: scale(1, 1);
        }
        to {
            opacity: 0;
            transform: scale(0, 0);
        }
    }

    @keyframes nld-slide-in {
        from {
            display: block;
            opacity: 0;
            transform: translate(0, 100px);
        }
        to {
            opacity: 1;
            transform: translate(0, 0);
        }
    }

    @keyframes nld-slide-out {
        from {
            opacity: 1;
            transform: translate(0, 0);
        }
        to {
            display: none;
            opacity: 0;
            transform: translate(0, 100px);
        }
    }

    @keyframes nld-slide-out-up {
        from {
            opacity: 1;
            transform: translate(0, 0);
        }
        to {
            display: none;
            opacity: 0;
            height: 0;
            overflow: hidden;
            transform: translate(0, -100px);
        }
    }

    @keyframes nld-blink {
        50% {
            opacity: 1;
            transform: scale(0.5);
        }
    }

    /* Elements */

    .nld-chatbot * {
        position: initial;
    }

    .nld-chatbot {
        color: inherit;
        font: inherit;
        font-family: "Helvetica Neue", "Neue Helvetica W01", Helvetica, Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        box-sizing: content-box;
    }

    .nld-chatbot * {
        font: inherit !important;
        color: inherit;
        margin: initial;
        box-sizing: content-box !important;
    }

    .nld-chatbot b {
        font-weight: bold !important;
    }

    .nld-chatbot i {
        font-style: italic !important;
    }

    .nld-chatbot {
        all: initial;
        font-size: initial;

        position: absolute;
        z-index: 99999999;

        top: 0;
        left: 0;
    }

    .nld-chatbot > .nld-avatar {
        /* Form */
        width: 60px;
        height: 60px;
        border-radius: 30px !important;

        /* Position */
        display: inline-block;
        position: fixed;
        z-index: 333;

        bottom: 80px;
        right: 18px;

        vertical-align: middle;

        /* Looks */
        background-size: cover;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.15);

        /* Typography */
        font-size: 16px !important;
        background-position: center;
    }

    .nld-chatbot.nld-moving > .nld-avatar {
        bottom: 12px;
        right: 24px;
    }

    .nld-chatbot > .nld-avatar:hover {
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }

    .nld-chatbot .nld-avatar::after {
        content: "";

        /* Form */
        width: 15px;
        height: 15px;
        border-radius: 9px !important;

        /* Position */
        position: absolute;
        bottom: 0;
        right: 0;

        /* Looks */
        background-color: #2ecc71;

        animation: nld-super-pop-in 0.5s cubic-bezier(0, .35, .28, .9) forwards;
        animation-delay: 1s;

        transform: scale(0, 0);
    }

    .nld-chatbot .nld-clear {
        clear: both;
    }

    .nld-chatbot .nld-invite-message-container {
        float: right;
        max-width: 305px;
        margin-right: 8px;
        margin-top: 0;

        display: flex;
        align-items: center;
    }

    .nld-chatbot .nld-chatbot-invite-container {
        right: 72px;

        top: 50%;
        transform: translateY(-50%);

        width: 305px;

        position: absolute;
    }

    .nld-chatbot .nld-chatbot-invite-message {
        position: relative;
        float: right;

        border-radius: 8px !important;
        padding: 9px;
        padding-left: 17px;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.25);
        border: 1px solid #d6d6d6;
        color: #555 !important;
        background: white;
        line-height: 1.5em !important;
        font-family: "Helvetica Neue", "Neue Helvetica W01", Helvetica, Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
        font-size: 16px !important;
    }

    .nld-chatbot .nld-invite-message-text {
        font-family: "Helvetica Neue", "Neue Helvetica W01", Helvetica, Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
    }

    .nld-chatbot .nld-invite-message-text strong {
        font-weight: bold !important
    }

    .nld-chatbot .nld-invite-message-text em {
        font-style: italic !important
    }

    .nld-chatbot .nld-invite-message-text p {
        margin-bottom: 0 !important;
    }

    .nld-chatbot .nld-chatbot-invite-message::after {
        content: "";

        /* Form */
        width: 16px;
        height: 32px;

        /* Position */
        position: absolute;
        top: 50%;
        margin-top: -16px;
        right: -16px;

        /* Looks */
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMvSURBVHic7ZpPi9NAGMafbKtbd6vrrn8KXqTYo5dlv4D3epBC8SuIJ2/2c4i3eigFpVfBuyctpVePS0vBq4UeSui/vB6aMZPZzGTiip1J5wcvmSaTJc+T951MZgM4HA6HY3/xwpBB/+tCdkWaASK5MySrATy5MOM6BjCsNsIDcKDRT0eklUZ4AAqSYzJBaUKtMoI3gC+FJBHiPpVQa0woInkMSBsXiOuTJFZ1zCg8ADc0+lHGtuxc4+AzQLzrsjLwhDbr50nOke03AmaArAxEcWxLCeeIhlhBEfHHoFi7aXeVFy1uk/obhywDxDRnbVVZWGnCge/775vN5iG2mSALZpL4mzdPtjUbIqLVavW90+k8AXDCxZ0wbodRBnAM4AjALQAlAIcAbmL7JCmGUQgjySjzTKGQzWbzs9/vPwNwGsbdMJgZzAhdE1TZYgweEf2pSyKaj0aj17Va7QvXhyQRKI4Rdy6/heT37qCrBNPp9F2lUnkI4D6AewDOEGUFy4Yy1JlgRxYkGEBERPP5/HOj0XgM4AEiI0QT+HJQlYJ9BhARLZfLH+12+wJ6JtiZBSoDwsHx12AweAGAlQQrhxNcLYUkA8zOgjQDiIiCIFiMx+M3iDLhDOossKcMdAxgzGaz7vn5+SNEpSBmQZYyMIMsBhAR+b7/tdVq1RDPgrQyyI8BRETr9fqy2+0+RdyAY1hoQGwilIXFYvGtVCo9RzQhCoS2amIktneGzoqwDCMEXJe/MmCz2Vz2er1X3C7j7qw2bhDMQB4fg0WdTkS0nEwmb6vV6kekD24QjkHSxwhSx4AgCKbD4fBltVr9BL3XYLvGA1XK7/XL0D6/Du/VgkhsEKR/vyRmPuy27+uiqFsW933/Q71eP0UklI8y4sKziDf/7mN7UUeQX5z4TBcnP6olcJ2PLHZOEXERSR82qARaLR7YGhBA/kWHzAgdg2R/xyj4DFB9IKFa0LBr6ivADADUFy8TqSPeaFN4A9LIKjztmBEUkPz/fJ06tlo4g58K6wpME2eNeCCeASp0RFklnCH7TDYLVgpnaC2JSbBaOCOrAbkQzZNmQO4EOxwOh8MR8RsgtSyqPuIxtgAAAABJRU5ErkJggg==);
        background-size: 32px 32px;
    }

    .nld-chatbot .nld-conversation {
        /* Form */
        width: 420px;
        height: calc(100vh - 72px);
        max-height: 500px;
        border-radius: 12px !important;

        /* Position */
        z-index: 32767;
        position: fixed;
        bottom: 48px;
        right: 24px;

        /* Looks */
        background: white;
        box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.15);
    }

    .nld-chatbot .nld-bg {
        position: absolute;

        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 8px !important;

        background: white;
    }

    .nld-chatbot .nld-conversation.nld-full {
        max-height: 550px;
        transition: max-height 0.5s ease-in-out;
    }

    .nld-chatbot .nld-conversation > .nld-ctx {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0;
        right: 0;

        border-radius: 8px !important;
    }

    .nld-chatbot .nld-typing-indicator {
        width: 54px;

        display: inline-block;
        vertical-align: middle;
    }

    .nld-chatbot .nld-typing-indicator > span {
        width: 12px;
        height: 12px;
        border-radius: 6px !important;

        margin-right: 6px;

        float: left;

        opacity: 0.5;

        background: #2ecc71;
    }

    .nld-chatbot .nld-typing-indicator > span:nth-child(1) {
        animation: 1s nld-blink infinite .1666s;
    }

    .nld-chatbot .nld-typing-indicator > span:nth-child(2) {
        animation: 1s nld-blink infinite .3332s;
    }

    .nld-chatbot .nld-typing-indicator > span:nth-child(3) {
        animation: 1s nld-blink infinite .5s;
    }

    /* States */

    .nld-nodisplay {
        display: none !important;
    }

    .nld-chatbot .nld-hidden {
        /* Animations */
        animation-name: nld-pop-out;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
    }

    .nld-chatbot .nld-shown {
        /* Animations */
        animation-name: nld-pop-in;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
    }

    .nld-chatbot .nld-shown-middle {
        /* Animations */
        animation-name: nld-pop-in-middle;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }

    .nld-chatbot .nld-hidden-slide {
        /* Animations */
        animation-name: nld-slide-out;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }

    .nld-chatbot .nld-hidden-slideup {
        /* Animations */
        animation-name: nld-slide-out-up;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }

    .nld-chatbot .nld-shown-slide {
        /* Animations */
        animation-name: nld-slide-in;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }

    .nld-chatbot .nld-close {
        position: absolute;
        top: 23px;
        right: 24px;

        width: 25px;
        height: 25px;

        z-index: 9999999;
    }

    .nld-chatbot.nld-left .nld-chatbot-invite-message .nld-close {
        top: -12px;
        right: -12px;
        left: auto;

        background: #aaa;
        border-radius: 13px !important;
    }

    .nld-chatbot .nld-chatbot-invite-message .nld-close {
        top: -12px;
        left: -12px;

        background: #aaa;
        border-radius: 13px !important;
    }

    .nld-chatbot .nld-close-white {
        display: block;
    }

    .nld-chatbot .nld-close-black {
        display: none;
    }

    .nld-chatbot .nld-close:hover {
        cursor: pointer;
    }

    .nld-chatbot .nld-close > img {
        all: inherit;
        width: 25px;
        top: 0;
        left: 0;
    }

    /* Modifiers */

    /* Left */

    .nld-chatbot.nld-left > .nld-avatar {
        left: 18px;
    }

    .nld-chatbot.nld-left .nld-chatbot-invite-container {
        left: 72px;
    }

    .nld-chatbot.nld-left .nld-chatbot-invite-message {
        float: left;
    }

    .nld-chatbot.nld-left .nld-conversation {
        left: 24px;
    }

    .nld-chatbot.nld-left .nld-chatbot-invite-message::after {
        left: -16px;
        right: initial;
        transform: scale(-1, 1);
    }

    /* Center */

    .nld-chatbot.nld-center > .nld-avatar {
        left: 50%;
        margin-left: -30px;
    }

    .nld-chatbot.nld-center .nld-chatbot-invite-container {
        left: 72px;
    }

    .nld-chatbot.nld-center .nld-chatbot-invite-message {
        float: left;
    }

    .nld-chatbot.nld-center .nld-conversation {
        left: calc(100vw / 2 - 360px);
        width: 100vw;
        max-width: 720px;
    }

    .nld-chatbot.nld-center .nld-chatbot-invite-message::after {
        left: -16px;
        right: initial;
        transform: scale(-1, 1);
    }

    .nld-chatbot .nld-conversation-header {
        width: 100%;
        height: 100px;

        border-radius: 8px 8px 0 0 !important;

        background: #0054ad;
        background: #0054ad;
    }

    .nld-chatbot .nld-mobile-brand {
        position: absolute;

        bottom: 0;
        left: 0;

        width: 100%;
        text-align: center;

        margin-bottom: -28px;
    }

    .nld-chatbot .nld-mobile-brand .nld-logo {
        width: 160px;
        opacity: 0.5;
    }

    .nld-chatbot .nld-brand {
        position: absolute;

        display: inline-block;
        width: 100%;

        margin: 0;

        text-align: center;

        bottom: -1.65em;
    }

    .nld-chatbot .nld-brand a {
        padding-top: 8px;
        background: #eee;

        margin-top: 1px;

        box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.15);

        border-radius: 0 0 6px 6px !important;

        border: 1px solid #ddd;

        display: inline-block !important;
    }

    .nld-chatbot .nld-brand a img {
        padding: 0;
        margin: 0;
        vertical-align: baseline;
        opacity: 0.7;
    }

    .nld-chatbot .nld-brand a img:hover {
        opacity: 1;
    }

    .nld-chatbot img.nld-3rdparty-branding {
        height: 58px;
        width: auto !important;

        margin: 0 auto;
        padding-top: 6px;

        display: none;
    }

    .nld-chatbot .nld-logo {
        width: 200px;
    }

    .nld-infobar {
        color: white;

        border-radius: 8px 8px 0 0 !important;

        font-family: "Open Sans Regular", sans-serif !important;

        height: 72px;

        display: flex;
        align-items: center;
    }

    .nld-chatbot .nld-infobar > .nld-avatar {
        width: 50px;
        height: 50px;
        border-radius: 25px !important;

        left: 12px;
        top: 11px;

        position: absolute;
        background-position: center;
        background-size: cover;
    }

    .nld-chatbot .nld-infobar > .nld-avatar::after {
        border: 2px solid #0054ad;
    }

    .nld-chatbot .nld-infobar .nld-info {
        margin: 0;
        margin-left: 68px;
    }

    .nld-chatbot .nld-info .nld-title {
        font-size: 1em !important;
        margin-bottom: 6px;
        margin-top: -6px;
    }

    .nld-chatbot .nld-info .nld-subtitle {
        font-size: 0.75em !important;
    }

    /* Conversational Form Implementation */

    .nld-chatbot .nld-ctx {
        font-family: "Open Sans Regular", sans-serif !important;
    }

    /* Conversation container */

    .nld-chatbot .nld-ctx > div > .nld-container {
        position: absolute;
        top: 72px;
        left: 0;
        right: 0;
        bottom: 64px;

        border-radius: 8px 8px 0 0 !important;

        background-color: white;
    }

    .nld-chatbot .nld-container:focus-visible, .nld-chatbot .nld-group {
        outline: none;
    }

    .nld-chatbot .nld-ctx > div > .nld-container.nld-full {
        bottom: 0;
        border-radius: 8px 8px 8px 8px !important;
    }

    .nld-chatbot .nld-ctx > div > .nld-overlay {
        position: absolute;

        top: 72px;
        left: 0;
        right: 0;

        height: 36px;

        background: white;

        background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0));
        background: -moz-linear-gradient(to bottom, white, rgba(255, 255, 255, 0));
        background: -webkit-linear-gradient(to bottom, white, rgba(255, 255, 255, 0));
    }

    /* Bubbles */

    .nld-chatbot .nld-msg .nld-bubble {
        padding: 16px 24px;
        margin: 12px;
        margin-bottom: 0;

        background: #f0f0f0;

        line-height: 1.5 !important;
        font-size: 0.9em !important;
        border-radius: 24px !important;

        clear: both;
    }

    .nld-chatbot .nld-msg .nld-bubble img {
        margin-top: 6px;
        width: 100%;
    }

    .nld-chatbot .nld-msg .nld-bubble b {
        font-weight: bold !important;
    }

    .nld-chatbot .nld-msg .nld-bubble a {
        text-decoration: underline;
        color: #07C;
    }

    /* Bubble left/right styles */

    .nld-chatbot .nld-ctx .nld-group.nld-right .nld-bubble {
        background: #0054ad;

        color: white;
    }

    .nld-chatbot .nld-ctx .nld-group.nld-left .nld-bubble {
        color: black;
    }

    /* Middle Bubbles

       .nld-ctx .nld-group.nld-right .nld-bubble {
       border-radius: 8px 0 0 8px;
       margin-top: 2px;
       margin-bottom: 2px;
       }

       .nld-ctx .nld-group.nld-left .nld-bubble {
       border-radius: 0 8px 8px 0;
       margin-top: 2px;
       margin-bottom: 2px;
       }

     */

    /* Bottom Bubbles

       .nld-ctx .nld-group.nld-right .nld-msg:last-child .nld-bubble {
       border-radius: 8px 0 8px 8px;
       margin-top: 2px;
       }

       .nld-ctx .nld-group.nld-left .nld-msg:last-child .nld-bubble {
       border-radius: 0 8px 8px 8px;
       margin-top: 2px;
       }

     */

    .nld-chatbot .nld-ctx .nld-group.nld-right .nld-msg:last-child .nld-bubble {
        margin-bottom: 6px;
    }

    .nld-chatbot .nld-ctx .nld-group.nld-left .nld-msg:last-child .nld-bubble {
        margin-bottom: 6px;
    }

    /* Top Bubbles

       .nld-ctx .nld-group.nld-right .nld-msg:first-child .nld-bubble {
       border-radius: 8px 8px 0 8px;
       margin-top: 0;
       }

       .nld-ctx .nld-group.nld-left .nld-msg:first-child .nld-bubble {
       border-radius: 8px 8px 8px 0;
       margin-top: 0;
       }

     */

    .nld-chatbot .nld-ctx .nld-group.nld-right .nld-msg:first-child .nld-bubble {
        margin-top: 0;
    }

    .nld-chatbot .nld-ctx .nld-group.nld-left .nld-msg:first-child .nld-bubble {
        margin-top: 0;
    }

    /* Message groups (blocks of speech) */

    .nld-chatbot .nld-ctx .nld-group {
        display: block;

        clear: both;

        max-width: 80%;

        margin: 6px;
    }

    .nld-chatbot .nld-ctx .nld-group.nld-full {
        display: block;

        clear: both;

        width: 100%;
        max-width: calc(100% - 48px);

        margin-bottom: 16px;
        margin-top: 16px;
    }

    .nld-chatbot .nld-ctx .nld-group.nld-nomargin {
        position: relative;
        display: block;

        clear: both;

        width: calc(100% + 6px);
        max-width: calc(100% + 6px);

        right: -6px;

        margin: 0;
        padding: 0;
    }

    /* Left/Right message groups */

    .nld-chatbot .nld-ctx .nld-group.nld-left {
        float: left;
        text-align: left;
    }

    .nld-chatbot .nld-ctx .nld-group.nld-right {
        float: right;
        text-align: right;
    }

    /*
     * Message containers (inside groups). Used to allow for custom
     * content like avatars side by side inside message groups.
     */

    .nld-chatbot .nld-ctx .nld-group.nld-left .nld-container {
        max-width: calc(100% - 40px);
        min-width: 200px;
    }

    .nld-chatbot .nld-ctx .nld-group.nld-full .nld-container {
        max-width: 21em;
        width: 100%;
    }

    .nld-chatbot .nld-ctx .nld-group.nld-left .nld-container {
        float: left;
    }

    .nld-chatbot .nld-ctx .nld-group.nld-right .nld-container {
        float: right;
    }

    /* Message group avatar */

    .nld-chatbot .nld-group.nld-left .nld-msg-avatar {
        float: left;
        margin-left: 8px;
    }

    .nld-chatbot .nld-group.nld-right .nld-msg-avatar {
        float: right;
        margin-right: 8px;
    }

    .nld-chatbot .nld-msg-avatar > .nld-img {
        width: 32px;
        height: 32px;
        border-radius: 16px !important;

        object-fit: cover;
    }

    /* Timestamps */

    .nld-chatbot .nld-timestamp {
        display: block;
        color: #979797;
        font-size: 0.75em !important;

        margin: 6px 0 6px 6px;
    }

    .nld-chatbot .nld-group.nld-left .nld-timestamp {
        float: right;
    }

    .nld-chatbot .nld-group.nld-right .nld-timestamp {
        float: right;
        color: #f5f5f5;
    }

    /* Text Input */

    .nld-chatbot .nld-input {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -40px;
        height: 48px;
        margin-top: 10px;
        border-radius: 0 0 8px 8px;
        background: #fff;
    }

    .nld-chatbot .nld-input.nld-plain {
        box-shadow: none;
    }

    .nld-chatbot .nld-input.nld-hide {
        height: 0;
    }

    .nld-chatbot .nld-input.nld-hide .nld-submit {
        display: none;
    }

    .nld-chatbot .nld-input > .nld-submit {
        box-sizing: content-box;
        background-color: rgb(33, 150, 243);
        color: rgb(33, 150, 243);
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFzSURBVGiB7dkxa9ZQFAbgk9LFycGhg4g6ODpUunXs0PoDtODgIvgX3J2k/0DoIA5uOtil0Klbl24iFDp1KwgODkVUHpeGihb7ff1uvJF7HsiYw3lJbnJzEpFSSimllFJKKZWHRbzCA3S1+xkcdpzZx/3aPQ0K7/xpF8u1exsENs4J3NvBvdo9FoWnfwkMP/AGd2r3WgRWLgjc+4bXuFW755ng5oSBe1/xEgu1e78UzOFkytDwBS9wtXaGqeHjJQL3PuEZrtTOMTG8nyFw7whPMF+yt7mSxX5xWKDGjYjYjIgPeGjMuzY8KnCFf7ePtdrZzoUOj/EWnwsHH/euDfNYxnPs4Xuh4Fu4O20//3xd4FpErETE6ulxfYZyJxFxu+u640lPGOqh1a6x3dKD0NpDy4hfS0Ot4aWCtQ4iYj0ilrqu2y5Ytxwj3loOQksfD1r7PNTgAKC5EU9zQ7zmxrTNDeKb+9XS1s+0lFJKKaWUUkr/o581mM0INt+/SAAAAABJRU5ErkJggg==');
        background-size: 30px 30px;

        width: 30px;
        height: 30px;

        display: inline-block;
        position: absolute;
        right: 24px;
        bottom: 6px;

        border-radius: 16px !important;
        border: 1px solid;
    }

    .nld-chatbot .nld-input > .nld-submit:hover {
        cursor: pointer;
    }

    .nld-chatbot .nld-input > .nld-submit.nld-only {
        left: 50%;
        transform: translateX(-50%);

        width: auto;
        text-align: center;
        line-height: 30px !important;
        text-transform: uppercase;

        background: transparent !important;
    }

    .nld-chatbot .nld-input > input {
        width: calc(100% - 64px) !important;
        height: 46px !important;
        border-color: rgb(33, 150, 243);

        background: white;
        color: black !important;

        border-radius: 32px !important;
        outline: none;
        border: 2px solid #eee;
        margin: 0 14px;

        padding: 0 16px !important;
        padding-bottom: 2px;

        font-size: 1em !important;

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    /* iOS Fix */
    input[type=text] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

    }

    /* Select Box */

    .nld-chatbot .nld-input select {
        width: calc(100% - 64px) !important;
        height: 46px !important;

        background: white;
        color: black !important;
        position: relative;

        border-radius: 32px !important;
        outline: none;
        border: 2px solid #eee;
        margin: 0 14px;

        padding: 0 16px !important;
        padding-bottom: 2px;

        font-size: 1em !important;

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .nld-chatbot .nld-input > .custom-select {
        position: relative;
    }

    .nld-chatbot .nld-input > .custom-select:after {
        content: "▼";
        position: absolute;
        color: #4c4c4c;
        top: 4px;
        right: 60px;
        padding: 12px 7px;
        pointer-events: none;
    }

    .nld-chatbot .nld-input > select::-ms-expand {
        display: none;
    }

    /* Selectors (Single/Multi option) */

    .nld-chatbot .nld-sel {
        padding: 24px 0;
        margin: 0;
        right: 6px;
        position: relative;
    }

    .nld-chatbot .nld-sel > .nld-opt {
        padding: 12px 24px;
        border-radius: 24px !important;
        display: inline-block;
        cursor: pointer;
        color: white;
        background: #0054ad;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
        margin: 3px;
        text-align: center;
    }

    .nld-chatbot .nld-sel > .nld-opt:hover {
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.3);
    }

    .nld-chatbot .nld-sel.nld-multi {
        padding: 12px 0;
    }

    .nld-chatbot .nld-sel.nld-multi > .nld-opt.nld-selected {
        background-image: linear-gradient(to right, #f31448, #ff6084);
    }

    .nld-chatbot .nld-sel.nld-multi > .nld-opt {
        background: transparent;
        border: 1px solid #f31448;
        color: #222;
    }

    .nld-chatbot .nld-secondary {
        padding: 4px 8px;
        background: transparent !important;
        color: #0592ff !important;
        box-shadow: none !important;
        border: none !important;
        font-size: 12px !important;
        text-decoration: underline !important;
    }

    .nld-chatbot .nld-secondary:hover {
        box-shadow: none !important;
        color: #0277d1 !important;
    }

    .nld-chatbot .nld-secondary.nld-selected {
        background-image: none !important;
    }

    /* Message-Selector */

    .nld-chatbot .nld-sel.nld-messages {
        padding: 0;
        margin: 0;

        padding-top: 12px;
    }

    .nld-chatbot .nld-sel.nld-messages > .nld-opt {
        margin: 6px 6px 0 0;
        padding: 12px 16px;

        border-radius: 24px !important;

        display: inline-block;

        cursor: pointer;

        color: white;

        background: #0054ad;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
    }

    .nld-chatbot .nld-sel.nld-messages > .nld-opt:hover {
        background: #0054ad;
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.3);
    }

    .nld-chatbot .nld-sel.nld-messages > .nld-opt.nld-selected {
        background-image: linear-gradient(to right, #f31448, #ff6084);
    }

    /* Time Selector */

    .nld-chatbot .nld-sel.nld-time {
        margin-right: 16px;

        border-radius: 8px !important;

        border: 1px solid #bc002c;

        overflow: hidden;
    }

    .nld-chatbot .nld-timedisplay {
        background: #0054ad;

        font-size: 3em !important;
        color: rgba(255, 255, 255, 0.8);

        padding: 6px 24px;
    }

    .nld-chatbot .nld-timepicker {
        background: white;

        padding: 6px;
    }

    .nld-chatbot .nld-timepicker .nld-clock {
        width: 14em;
        height: 14em;
        border-radius: 7em !important;

        background: #eee;

        position: relative;
    }

    .nld-chatbot .nld-clock .nld-num-container {
        width: 11em;
        height: 11em;

        top: 1.5em;
        left: 1.5em;

        position: relative;
    }

    .nld-chatbot .nld-clock .nld-pivot {
        box-sizing: content-box;

        position: absolute;

        top: 50%;
        left: 50%;

        margin-top: -0.25em;
        margin-left: -0.25em;

        width: 0.5em;
        height: 0.5em;

        border-radius: 0.5em !important;

        border: 2px solid #ea083d;
    }

    .nld-chatbot .nld-clock .nld-pointer {
        position: absolute;

        top: 0.25em;
        left: 0.5em;

        margin-top: -1px;

        width: 4.55em;
        height: 2px;

        transform-origin: -0.25em 1px;

        background: #ea083d;
    }

    .nld-chatbot .nld-clock .nld-clock-num {
        position: absolute;

        width: 2em;
        height: 2em;

        margin-top: -1em;
        margin-left: -1em;

        line-height: 2em !important;

        text-align: center;
        vertical-align: middle;

        cursor: pointer;

        color: #888;

        border-radius: 1em !important;
    }

    .nld-chatbot .nld-clock .nld-clock-num.nld-disabled {
        color: #ddd;
    }

    .nld-chatbot .nld-clock .nld-clock-num:hover {
        color: black;
    }

    .nld-chatbot .nld-clock .nld-clock-num.nld-selected {
        color: white;
        background: #ea083d;
    }

    .nld-chatbot .nld-timedisplay .nld-hours {
        display: inline-block;

        cursor: pointer;
    }

    .nld-chatbot .nld-timedisplay .nld-minutes {
        display: inline-block;

        cursor: pointer;
    }

    .nld-chatbot .nld-timedisplay .nld-sep {
        display: inline-block;

        color: #eee;
    }

    .nld-chatbot .nld-hours.nld-selected {
        color: white;

        border-bottom: 3px solid white;
    }

    .nld-chatbot .nld-minutes.nld-selected {
        color: white;

        border-bottom: 3px solid white;
    }

    .nld-chatbot .nld-timedisplay .nld-period {
        float: right;
        font-size: 0.33em !important;
        margin-top: 0.8em;
        margin-left: 1em;
    }

    .nld-chatbot .nld-period .nld-day {
        cursor: pointer;
    }

    .nld-chatbot .nld-period .nld-night {
        cursor: pointer;
    }

    .nld-chatbot .nld-period .nld-day.nld-selected {
        color: white;
    }

    .nld-chatbot .nld-period .nld-night.nld-selected {
        color: white;
    }

    /* Date selector */

    .nld-chatbot .nld-sel.nld-date {
        padding: 0;
        padding-bottom: 12px;

        right: 6px;

        position: relative;
    }

    .nld-chatbot .nld-cal {
        position: relative;

        min-width: 18em;
        width: 100%;
        height: 16em;

        background: white;

        border-radius: 8px !important;

        border: 1px solid #cf0237;

        color: #444;

        font-size: 0.8em !important;

        overflow: hidden;
    }

    .nld-chatbot .nld-cal > .nld-row {
        width: 100%;
        height: 2em;

        text-align: center;
    }

    .nld-chatbot .nld-row.nld-title {
        font-weight: bold !important;

        color: white;

        background: #0054ad;
    }

    .nld-chatbot .nld-row.nld-header {
        font-weight: bold !important;
        color: white;
        background: #0054ad;
        border-radius: 6px 6px 0 0 !important;
        vertical-align: middle;
    }

    .nld-chatbot .nld-row.nld-header > .nld-header {
        padding-top: 0.5em;
    }

    .nld-chatbot .nld-cal .nld-prev {
        float: left;
        padding-left: 12px;

        cursor: pointer;

        -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        filter: FlipH;
        -ms-filter: "FlipH";

        width: 16px;
        height: 16px;

        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAB7SURBVFiF7dexCoAgFIXhW/R4bRYO9fj1FEV/i+BiUEPdkHPAxeV8oMjVTHkQoAfWtIIHYCFnA6In4HsEEFKpK2IoIHZgFkIIIYRIiFhAfP5Y3Ua0LxmOwl5jZt1LfTmuRwCMF5dwUrnKVV5Nue9Qyg/GcvePie/XrMqcOOCgDspkl64AAAAASUVORK5CYII=');
        background-size: 16px;

        background-repeat: no-repeat;
    }

    .nld-chatbot .nld-cal .nld-next {
        float: right;
        margin-right: 12px;

        cursor: pointer;

        width: 16px;
        height: 16px;

        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAB7SURBVFiF7dexCoAgFIXhW/R4bRYO9fj1FEV/i+BiUEPdkHPAxeV8oMjVTHkQoAfWtIIHYCFnA6In4HsEEFKpK2IoIHZgFkIIIYRIiFhAfP5Y3Ua0LxmOwl5jZt1LfTmuRwCMF5dwUrnKVV5Nue9Qyg/GcvePie/XrMqcOOCgDspkl64AAAAASUVORK5CYII=');
        background-size: 16px;
    }

    .nld-chatbot .nld-next.nld-full, .nld-chatbot .nld-prev.nld-full {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACMSURBVFiF7ZdRC0AwFEYv+Xne0B74+fwKcrwoysWwGrlf7WWn9p3aWpuIRQmQA908iqs8hEDLkh5wV3hogU3JGQ8hUMyLqiVnPJREqZQMQOPDTcIkTOIXEk4pWV9Wh/w1EulDh1GZS0Qk8+T3E3ULgGrnkNU+3Mqt3Mo/UR73UcoLnuXRPyZxv2a/ygRSxkAo9hmBFQAAAABJRU5ErkJggg==');
    }

    .nld-chatbot .nld-cal .nld-cell {
        box-sizing: content-box;
        display: inline-block;

        width: 14.2857%;
        height: 50%;

        padding: 0.5em 0;

        text-align: center;

        cursor: pointer;

        user-select: none;

        position: relative;
    }

    .nld-chatbot .nld-cell.nld-this-month {
    }

    .nld-chatbot .nld-cell.nld-disabled {
        background-color: #eee;
        cursor: not-allowed;
    }

    .nld-chatbot .nld-cell.nld-next-month {
        color: #bbb;
    }

    .nld-chatbot .nld-cell.nld-prev-month {
        color: #999;
    }

    .nld-chatbot .nld-cell.nld-today {
        font-weight: bold !important;
        color: black;
    }

    .nld-chatbot .nld-cell.nld-selected {
        font-weight: bold !important;
        color: black;
    }

    .nld-chatbot .nld-cell.nld-selected::after {
        box-sizing: content-box;

        width: calc(100% - 8px);
        height: calc(100% - 6px);

        border-radius: 6px !important;

        border: 1px solid #cf0237;

        opacity: 0.5;

        position: absolute;

        top: 3px;
        left: 3px;

        content: "";
    }

    /* Carousel */

    /* Hide scrollbar */
    .glider {
        margin-bottom: -50px !important;
        padding-bottom: 50px !important;
    }

    .nld-chatbot .nld-carousel {
        overflow: hidden;
    }

    .nld-chatbot .nld-carousel .nld-prev, .nld-chatbot .nld-carousel .nld-next {
        position: absolute;

        width: 2em;
        height: 2em;

        top: 25%;
        margin-top: -1em;
        left: 0;
        margin: 0.25em;

        z-index: 1;

        border: 1px solid #ddd;
        background: white;
        border-radius: 0.25em !important;

        color: #888;

        cursor: pointer;

        user-select: none;
    }

    .nld-chatbot .nld-carousel .nld-next {
        right: 0;
        left: auto;
    }

    .nld-chatbot .nld-carousel .nld-card {
        background: white;

        border: 1px solid #ddd;

        margin: 0.25em 0.5em;
        margin-bottom: 1em;
        padding: 0;

        border-radius: 0.5em !important;

        overflow: hidden;
    }

    .nld-chatbot .nld-carousel .nld-card .nld-card-body {
        min-height: 12em;

        text-align: left;

        background-size: cover;

        color: white;
    }

    .nld-chatbot .nld-carousel .nld-card .nld-card-title {
        padding: 0.5em;
        margin: 0;

        text-align: left;
    }

    .nld-chatbot .nld-carousel .nld-card .nld-sel {
        padding: 0;
        right: 0;

        margin: 6px;
        margin-bottom: 12px;
    }

    .nld-chatbot .nld-carousel .nld-card .nld-opt {
        display: block;
        margin: 6px;
    }

    /* Scrollbar */

    .nld-chatbot .nld-scrollable {
        width: calc(100% - 6px);
        height: 100%;
        box-sizing: content-box;
        overflow-y: scroll;
        margin-right: -50px;
    }

    .nld-chatbot .nld-scrollbar {
        position: absolute;
        top: 0;
        right: 0;
        width: 6px;
        height: 100%;
    }

    .nld-chatbot .nld-handle {
        width: 100%;

        position: absolute;

        border-radius: 3px !important;

        background: #ea083d;

        opacity: 0.8;
    }

    .nld-chatbot .nld-whitespace {
        width: 100%;
        height: 1em;
        background: none;
    }

    .nld-chatbot .nld-input .nld-tooltip-error {
        position: absolute;
        display: flex;
        background-color: #CB2134;
        color: #FFF;
        margin: 0px 20px;
        width: calc(100% - 64px) !important;
        border-radius: 8px;
        padding: 5px 10px;
        font-size: 14px !important;
        transform: translateY(-135%);
        box-shadow: 0 1px 8px rgb(0 0 0 / 50%);
    }

    .nld-chatbot .nld-input .nld-tooltip-error:after {
        content: '';
        position: absolute;
        display: block;
        width: 14px;
        height: 14px;
        transform-origin: 50% 50%;
        transform: rotate(45deg) translateX(-50%);
        background-color: inherit;
        z-index: -10;
        left: 20px;
        top: auto;
        bottom: -10px;
        border-radius: 2px;
    }

    .nld-chatbot .nld-multi .nld-tooltip-error {
        position: absolute;
        display: flex;
        background-color: #CB2134;
        color: #FFF;
        border-radius: 8px;
        padding: 5px 10px;
        right: 0;
        font-size: 14px !important;
        transform: translateY(-135%);
        box-shadow: 0 1px 8px rgb(0 0 0 / 50%);
    }

    .nld-chatbot .nld-multi .nld-tooltip-error:after {
        content: '';
        position: absolute;
        display: block;
        width: 14px;
        height: 14px;
        transform-origin: 50% 50%;
        transform: rotate(45deg) translateX(-50%);
        background-color: inherit;
        z-index: -10;
        right: 20px;
        top: auto;
        bottom: -10px;
        border-radius: 2px;
    }

    .nld-chatbot .nld-bubble a.whatsapp-link {
        text-decoration: none;
    }

    .nld-chatbot .nld-bubble a.whatsapp-link > div {
        background: #455a64;
        color: white;
        padding: 1em;
        border-radius: 0.5em;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        font-weight: bold;
        margin-top: 1em;
    }

    .nld-chatbot .nld-bubble a.whatsapp-link > div > img {
        width: 2em;
        height: 2em;
        margin-top: -0.25em;
        margin-right: 0.25em;
        float: left;
    }

    /* Media Queries */
    @media only screen and (max-device-width: 720px) {
        .nld-chatbot.nld-center .nld-conversation {
            width: auto;
            height: auto;
            max-height: none;
            min-height: none;

            position: fixed;

            left: 0;
            right: 0;
            top: 0;
            bottom: 0;

            z-index: 32767;
        }

    }

    @media only screen and (max-width: 720px) {
        .nld-chatbot.nld-center > .nld-avatar {
            left: 0 !important;
            margin-left: 0 !important;
        }
    }

    @media only screen and (max-device-width: 720px) {
        .nld-chatbot .nld-conversation {
            border-radius: 0 !important;
        }

        .nld-chatbot .nld-conversation-header {
            border-radius: 0 !important;
        }

        .nld-chatbot .nld-avatar {
            bottom: 48px;
        }

        .nld-chatbot .nld-conversation,
        .nld-chatbot.nld-left .nld-conversation,
        .nld-chatbot.nld-right .nld-conversation {
            width: auto;
            height: auto;
            max-height: none !important;
            min-height: none !important;

            position: fixed;

            left: 0;
            right: 0;
            top: 0;
            bottom: 0;

            z-index: 32767;
        }

        .nld-chatbot .nld-invite-message-container {
            max-width: 200px;
            max-width: calc(100vw - 138px);
        }

        .nld-chatbot .nld-invite-message-container.nld-notification .nld-invite-message-text {
            min-width: 0 !important;
        }

        .nld-chatbot .nld-invite-message-container.nld-notification .nld-footer.nld-verified {
            display: none !important;
        }

        .nld-chatbot .nld-ctx > div > .nld-container, .nld-ctx > div > .nld-overlay {
            top: 72px;
            border-radius: 0 !important;
        }

        .nld-chatbot .nld-ctx > div > .nld-container {
            bottom: 76px;
        }

        .nld-chatbot .nld-ctx > div > .nld-container.nld-full {
            bottom: 18px;
        }

        .nld-chatbot .nld-close-white {
            display: block;
        }

        .nld-chatbot .nld-close-black {
            display: none;
        }

        .nld-chatbot .nld-input > input {
            font-size: 1.1em !important;
        }

        .nld-chatbot .nld-input {
            bottom: 28px;
        }

        .nld-chatbot .nld-msg .nld-bubble {
            font-size: 1em !important;
        }
    }

    /* Waiting Spinnner */

    .nld-chatbot .nld-input .nld-spinner {
        position: relative;
        width: 2em;
        height: 2em;

        top: 50%;
        left: 50%;
        margin-left: -1em;
        margin-top: -1em;
    }

    .nld-chatbot .nld-input .nld-spinner div {
        position: absolute;
        border-width: 0.25em;
        border-style: solid;
        border-color: inherit;
        margin-top: -0.25em;
        border-radius: 50% !important;
        animation: nld-spinner 1.6s cubic-bezier(0, .35, .28, .9) infinite;
    }

    .nld-chatbot .nld-input .nld-spinner div:nth-child(2) {
        animation-delay: -0.64s;
    }

    @keyframes nld-spinner {
        0% {
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            opacity: 1;
        }
        80% {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
        }
        100% {
            opacity: 0;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
        }
    }

    /* Social Proof Icon */
    .nld-chatbot .nld-sp-icon {
        margin: -4px;

        min-width: 64px;
        height: 64px;
        border-radius: 50% !important;
        background-size: 0%;
    }

    .nld-chatbot .nld-sp-icon div:not(:nth-child(3)) {
        position: absolute;

        background: inherit;
        border-radius: 50% !important;

        animation: nld-pulse 2.6s cubic-bezier(0, .35, .28, .9) infinite;
    }

    .nld-chatbot .nld-sp-icon div:nth-child(2) {
        animation-delay: -0.64s;
    }

    .nld-chatbot .nld-sp-icon .nld-img {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50% !important;
        background-size: 100%;
    }

    .nld-chatbot .nld-sp-icon.nld-right {
        margin-right: 0;
        margin-left: 12px;

        animation: nld-slide-in 0.8s cubic-bezier(0, .35, .28, .9) forwards;
    }

    .nld-chatbot .nld-sp-icon.nld-left {
        margin-left: 0;
        margin-right: 12px;

        animation: nld-slide-in 0.4s cubic-bezier(0, .35, .28, .9) forwards;
    }

    .nld-chatbot .nld-footer {
        display: none;
    }

    .nld-chatbot .nld-footer.nld-verified::before {
        position: absolute;
        top: 50%;
        left: -1.2em;
        width: 1em;
        height: 1em;
        margin-top: -0.5em;
        content: "C";
        font-family: neurolead !important;
        color: white;
        background: #58f;
        border-radius: 50% !important;
        line-height: 1em !important;
    }

    .nld-chatbot .nld-invite-message-container.nld-notification .nld-footer.nld-verified {
        display: block;
        opacity: 0;
        text-align: right;
        position: absolute;
        right: 8px;
        bottom: 0;
        font-size: 75% !important;
        color: #58f;
        animation: nld-slide-in 0.4s cubic-bezier(0, .35, .28, .9) forwards;
        animation-delay: 0.5s;
    }

    .nld-chatbot .nld-invite-message-container.nld-notification .nld-footer.nld-time {
        display: block;
        opacity: 0;
        position: absolute;
        left: 92px;
        bottom: 0;
        font-size: 75% !important;
        color: #aaa;
        animation: nld-slide-in 0.4s cubic-bezier(0, .35, .28, .9) forwards;
        animation-delay: 0.25s;
    }

    .nld-chatbot.nld-left .nld-invite-message-container.nld-notification .nld-footer.nld-time {
        left: 16px;
        text-align: left;
    }

    .nld-chatbot.nld-left .nld-invite-message-container.nld-notification .nld-footer.nld-verified {
        right: 86px;
        text-align: right;
    }

    .nld-chatbot .nld-invite-message-container.nld-notification .nld-invite-message-text {
        min-width: 180px;
        margin-bottom: 16px;
        line-height: 1.2em !important;

        align-self: flex-start;
    }

    @keyframes nld-pulse {
        0% {
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            opacity: 1;
        }
        60% {
            top: -25%;
            left: -25%;
            width: 150%;
            height: 150%;
            opacity: 0;
        }
        100% {
            opacity: 0;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
        }
    }

    .nld-chatbot .nld-popup-container {
        position: absolute;
        bottom: 3.5em;
        width: 100%;
        left: 0;
    }

    .nld-chatbot .nld-popup-container .nld-popup {
        margin: 0 0.75em;
        background: #fff0f1;
        border-radius: 0.5em;
        box-shadow: 0 4px 6px -5px rgba(0, 0, 0, 0.2);
        border: 1px solid #f2dcd0;
        color: #a33;
        padding: 1em 2em;
        text-align: center;
        font-size: 1.25em !important;
    }

    /* Glider.js */

    .glider-contain {
        width: 100%;
        margin: 0 auto;
        position: relative;
    }

    .glider {
        margin: 0 auto;
        position: relative;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        transform: translateZ(0);
    }

    .glider-track {
        transform: translateZ(0);
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        z-index: 1;
    }

    .glider.draggable {
        user-select: none;
        cursor: -webkit-grab;
        cursor: grab;
    }

    .glider.draggable .glider-slide img {
        user-select: none;
        pointer-events: none;
    }

    .glider.drag {
        cursor: -webkit-grabbing;
        cursor: grabbing;
    }

    .glider-slide {
        user-select: none;
        justify-content: center;
        align-content: center;
        width: 100%;
    }

    .glider-slide img {
        max-width: 100%;
    }

    .glider::-webkit-scrollbar {
        opacity: 0;
        height: 0;
    }

    .glider-prev, .glider-next {
        user-select: none;
        position: absolute;
        outline: none;
        background: none;
        padding: 0;
        z-index: 2;
        font-size: 40px;
        text-decoration: none;
        left: -23px;
        border: 0;
        top: 30%;
        cursor: pointer;
        color: #666;
        opacity: 1;
        line-height: 1 !important;
        transition: opacity .5s cubic-bezier(.17, .67, .83, .67),
        color .5s cubic-bezier(.17, .67, .83, .67);
    }

    .glider-prev:hover,
    .glider-next:hover,
    .glider-prev:focus,
    .glider-next:focus {
        color: #a89cc8;
    }

    .glider-next {
        right: -23px;
        left: auto;
    }

    .glider-next.disabled,
    .glider-prev.disabled {
        opacity: .25;
        color: #666;
        cursor: default;
    }

    .glider-slide {
        min-width: 150px;
    }

    .glider-hide {
        opacity: 0;
    }

    .glider-dots {
        user-select: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
        padding: 0;
    }

    .glider-dot {
        background: none;
        border: 0;
        padding: 0;
        user-select: none;
        outline: none;
        display: block;
        cursor: pointer;
        color: #ccc;
        border-radius: 999px !important;
        background: #ccc;
        width: 12px;
        height: 12px;
        margin: 7px;
    }

    .glider-dot:hover,
    .glider-dot:focus,
    .glider-dot.active {
        background: #a89cc8;
    }

    @media (max-width: 36em) {
        .glider::-webkit-scrollbar {
            opacity: 1;
            -webkit-appearance: none;
            width: 7px;
            height: 3px;
        }

        .glider::-webkit-scrollbar-thumb {
            opacity: 1;
            border-radius: 99px !important;
            background-color: rgba(156, 156, 156, 0.25);
            box-shadow: 0 0 1px rgba(255, 255, 255, .25);
        }
    }

    .opacity-hover:hover {
        opacity: 0.9;
    }

    @media screen and  (max-width: 768px) {

        .nld-chatbot .nld-ctx > div > .nld-container.nld-full {
            bottom: 60px;
        }

        .nld-chatbot .nld-ctx .nld-group {
            max-width: 100%;
        }

        .nld-chatbot .nld-input {
            bottom: 5px;
        }
    }
</style>
`;

document.body.innerHTML += content;
const close_icon = "assets/images/close.png";

const App = new Vue({
  el: "#nld-chatbot",

  data: {
    nld_conversation_avatar_show: true,
    nld_conversation_form_show: false,
    chatbot_invite_message: true,
    show_message_apresentation: false,
    broker: {},
    lead: {
      cellphone: null,
      name: null,
      email: null,
      interest: null,
    },
    input: null,
    start_now: false,
    input_new_more_info: false,
    input_cellphone: false,
    close_icon: close_icon,
    stage_flow: 0,
    inputmode: "numeric",
  },

  methods: {
    send_message_whatsapp() {
      const url =
        "https://api.whatsapp.com/send?phone=" +
        this.broker.cellphone +
        "&text=" +
        this.broker.message;

      window.location = url;
    },

    open_form() {
      this.nld_conversation_form_show = true;
      this.nld_conversation_avatar_show = false;
    },

    close_form() {
      this.nld_conversation_form_show = false;
      this.nld_conversation_avatar_show = true;
      this.chatbot_invite_message = true;
      this.show_message_apresentation = false;
      this.input = null;
      this.start_now = false;
      this.input_new_more_info = false;
      this.input_cellphone = false;
      this.stage_flow = 0;
      this.inputmode = "numeric";
    },
    set_broker() {
      this.broker = {
        id: "1",
        image: "assets/images/chatbot.jpg",
        name: "ebimob",
        cellphone: "5547988238296",
        city: "",
        message:
          "Meu nome é Denis",
        options: ["Fale comigo AGORA!"],
        description:
          "Quer ver uma <b>Demonstração Gratuita</b> da sua jornada de sucesso?",
      };
    },

    set_lead_cellphone() {
      this.lead.cellphone = this.input;
      this.stage_flow = 2;
      this.save_lead();

      this.input = null;
      this.inputmode = "text";
    },

    set_lead_name() {
      this.lead.name = this.input;
      this.stage_flow = 3;
      this.save_lead();

      this.inputmode = "email";
      this.input = null;
    },

    set_lead_email() {
      const format_valid = /\S+@\S+\.\S+/;

      const inputEmailElement = document.getElementById("input-email");

      if (!format_valid.test(this.input)) {
        inputEmailElement.style.borderColor = "red";
        return;
      }

      this.lead.email = this.input;
      this.stage_flow = 0;

      this.save_lead();
      this.input = null;
    },

    set_lead_interest(input = "undefined") {
      if (input === "undefined") {
        this.lead.interest = this.broker.options[0];
      }

      this.lead.interest = input;

      this.save_lead();
    },

    set_start_now() {
      this.start_now = true;
      this.stage_flow = 1;

      this.show_input_new_more_info();
    },

    show_input_new_more_info() {
      this.input_new_more_info = true;
    },

    show_options_selection() {
      return !!(this.lead.name && this.lead.cellphone && this.lead.email);
    },

    show_stage_1() {
      return this.stage_flow === 1;
    },

    show_option(option) {
      return this.lead.interest === null || this.lead.interest === option;
    },

    save_lead() {
      // Função para salvar lead
    },

    hidden_broker_message() {
      this.chatbot_invite_message = false;
      this.nld_conversation_avatar_show = true;
      this.nld_conversation_form_show = false;
    },
  },

  watch: {
    nld_conversation_form_show(newValue) {
      if (newValue) {
        document.body.style.overflow = "hidden";
        document.querySelector(".nld-chatbot-bg").style.display = "block";
      } else {
        document.body.style.overflow = "scroll";
        document.querySelector(".nld-chatbot-bg").style.display = "none";
      }

      setTimeout(() => {
        document
          .querySelector("#message-hello .loading")
          .classList.add("active");
      }, 500);

      setTimeout(() => {
        const messageHello = document.querySelector("#message-hello");
        messageHello.querySelector(".loading").classList.remove("active");
        messageHello.querySelector(".message").classList.add("active");
      }, 1500);

      setTimeout(() => {
        document.querySelector("#message-lets-find").style.display = "block";
        document
          .querySelector("#message-lets-find .loading")
          .classList.add("active");
      }, 2000);

      setTimeout(() => {
        const messageLetsFind = document.querySelector("#message-lets-find");
        messageLetsFind.querySelector(".loading").classList.remove("active");
        messageLetsFind.querySelector(".message").classList.add("active");
      }, 3000);
    },

    input_new_more_info(newValue) {
      if (newValue) {
        setTimeout(() => {
          document
            .querySelector("#message-start-now .loading")
            .classList.add("active");
        });

        setTimeout(() => {
          const messageStartNow = document.querySelector("#message-start-now");
          messageStartNow.querySelector(".loading").classList.remove("active");
          messageStartNow.querySelector(".message").classList.add("active");
        }, 1000);

        setTimeout(() => {
          document
            .querySelector("#message-your-cellphone .loading")
            .classList.add("active");
        }, 1500);

        setTimeout(() => {
          const messageYourCellphone = document.querySelector(
            "#message-your-cellphone"
          );
          messageYourCellphone
            .querySelector(".loading")
            .classList.remove("active");
          messageYourCellphone
            .querySelector(".message")
            .classList.add("active");
        }, 2500);

        setTimeout(() => {
          document.getElementById("input-cellphone").classList.add("active");
        }, 2500);
      }
    },

    start_now(newValue) {
      if (newValue) {
        setTimeout(() => {
          document.querySelector(".nld-scrollable").scrollTo({
            top: 300,
            behavior: "smooth",
          });
        }, 1500);
      }
    },

    "lead.cellphone"() {
      document.querySelector(".nld-scrollable").scrollTo({
        top: 600,
        behavior: "smooth",
      });

      const tempField = document.createElement("input");
      tempField.setAttribute("type", "text");
      tempField.setAttribute(
        "style",
        "position:absolute; top: 0px; opacity: 0; -webkit-user-modify: read-write-plaintext-only; left:0px;"
      );
      document.body.appendChild(tempField);

      tempField.onfocus = function () {
        setTimeout(() => {
          tempField.style.display = "none";
          setTimeout(() => {
            document.body.removeChild(tempField);
            document.body.focus();
          }, 14);
        }, 200);
      };

      tempField.focus();

      setTimeout(() => {
        document
          .querySelector("#message-your-name .loading")
          .classList.add("active");
      });

      setTimeout(() => {
        const messageYourName = document.querySelector("#message-your-name");
        messageYourName.querySelector(".loading").classList.remove("active");
        messageYourName.querySelector(".message").classList.add("active");
      }, 1500);

      setTimeout(() => {
        document.querySelector(".nld-scrollable").scrollTo({
          top: 1200,
          behavior: "smooth",
        });
      }, 1500);
    },

    "lead.name"() {
      document.querySelector(".nld-scrollable").scrollTo({
        top: 1200,
        behavior: "smooth",
      });

      setTimeout(() => {
        document.querySelector(".nld-scrollable").scrollTo({
          top: 1500,
          behavior: "smooth",
        });
      }, 1500);

      setTimeout(() => {
        document
          .querySelector("#message-great-name .loading")
          .classList.add("active");
      });

      setTimeout(() => {
        const messageGreatName = document.querySelector("#message-great-name");
        messageGreatName.querySelector(".loading").classList.remove("active");
        messageGreatName.querySelector(".message").classList.add("active");
      }, 1500);

      setTimeout(() => {
        document
          .querySelector("#message-your-email .loading")
          .classList.add("active");
      }, 2000);

      setTimeout(() => {
        const messageYourEmail = document.querySelector("#message-your-email");
        messageYourEmail.querySelector(".loading").classList.remove("active");
        messageYourEmail.querySelector(".message").classList.add("active");
      }, 2500);
    },

    "lead.email"() {
      setTimeout(() => {
        document.querySelector(".nld-scrollable").scrollTo({
          top: 1200,
          behavior: "smooth",
        });
      }, 500);

      setTimeout(() => {
        document.querySelector(".nld-scrollable").scrollTo({
          top: 1500,
          behavior: "smooth",
        });
      }, 1500);

      setTimeout(() => {
        document
          .querySelector("#message-select-option .loading")
          .classList.add("active");
      });

      setTimeout(() => {
        const messageSelectOption = document.querySelector(
          "#message-select-option"
        );
        messageSelectOption
          .querySelector(".loading")
          .classList.remove("active");
        messageSelectOption.querySelector(".message").classList.add("active");
      }, 1500);

      setTimeout(() => {
        document
          .querySelector("#message-select-option-user")
          .classList.add("active");
      }, 2000);
    },

    "lead.interest"() {
      setTimeout(() => {
        document.querySelector(".nld-scrollable").scrollTo({
          top: 1500,
          behavior: "smooth",
        });
      }, 1500);
    },

    stage_flow(newValue) {
      if (newValue === 1) {
        Vue.nextTick().then(() => {
          document.getElementById("input-cellphone").focus();
        });
      }

      if (newValue === 2) {
        Vue.nextTick().then(() => {
          document.getElementById("input-name").focus();
        });
      }

      if (newValue === 3) {
        Vue.nextTick().then(() => {
          document.getElementById("input-email").focus();
        });
      }
    },
  },

  mounted() {
    this.set_broker();
  },
});

let aps = false;

setTimeout(() => {
  App.show_message_apresentation = true;
  aps = true;
}, 3000);

setInterval(() => {
  if (aps) {
    App.show_message_apresentation = !App.show_message_apresentation;
  }
}, 10000);
