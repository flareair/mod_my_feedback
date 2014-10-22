<?php
defined('_JEXEC') or die;
?>
<div class="myFeedbackForm form-vertical">
  <form>
    <div class="form-group">
      <label>ФИО</label>
      <input type="text" class="form-control" placeholder="Введите Ваше имя" name="username">
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" placeholder="Введите email" name="email">
    </div>

    <div class="form-group">
      <label>Сообщение</label>
      <textarea class="form-control" name="message" placeholder="Введите сообщение" rows="5"></textarea>
    </div>

    <div class="form-group">
      <label>Антиспам</label>
      <!-- <label class="captchaGeneratedEq">2 + 2 =</label> -->
      <div class="input-group">
        <span class="captchaGeneratedEq input-group-addon"><strong></strong></span>
        <input type="text" class="form-control" placeholder="Результат" name="captcha">
        <span class="input-group-btn">
          <button class="btn btn-default captchaRefreshEq" type="button"><i class="fa fa-refresh"></i></button>
        </span>
      </div><!-- /input-group -->
      
    </div>

    <div class="form-group">
      <input type="submit" class="btn btn-primary myFormButton">
    </div>
  </form>
</div>
