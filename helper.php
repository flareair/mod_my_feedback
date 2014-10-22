<?php
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

defined('_JEXEC') or die;
 
class ModMyFeedbackHelper
{
  public static function getAjax()
  {
    $data = static::getData();
    $mailMessage = static::sendEmail($data);
    return $mailMessage;
  }
  public static function getData()
  {
    $input = JFactory::getApplication()->input;
    $data = $input->getString('data');
    return json_decode($data, true);
  }
  public static function sendEmail($data)
  {
    $params = static::getParams();
    $letter = '';
    foreach ($data as $row) {
      $letter .= '<p>' . $row['name'] . ': ' . $row['value'] . '</p>';
    }
    $mailer = JFactory::getMailer();
    $config = JFactory::getConfig();
    $sender = array($config->get('mailfrom'),$config->get('fromname'));
    $mailer->addRecipient($params->get('mailto'));
    $mailer->isHTML(true);
    // $mailer->Encoding = 'base64';
    $mailer->setBody($letter);
    $send = $mailer->Send();
    if ( $send !== true ) {
      return '<b>Ошибка сервера!</b> ' . $send->__toString() . ' Пропробуйте позже.';
    } else {
      return 'ok';
    }
    
  }
  public static function getParams($instance = 'mod_my_feedback')
  {
    jimport('joomla.application.module.helper');
    $module = JModuleHelper::getModule($instance);
    $moduleParams = new JRegistry;
    $moduleParams->loadString($module->params);
    return $moduleParams;
  }
}