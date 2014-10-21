<?php
 
defined('_JEXEC') or die;
 
class ModMyFeedbackHelper
{
  public static function getAjax()
  {
    $data = ModMyFeedbackHelper::getData();
    return json_encode($data);
  }
  public static function getData()
  {
    $input = JFactory::getApplication()->input;
    $data = $input->getString('data');
    return json_decode($data, true);
  }
  public static function sendEmail($data)
  {
    // TODO: send email static method
  }
}