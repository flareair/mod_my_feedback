<?php
 
defined('_JEXEC') or die;
 
class ModMyFeedbackHelper
{
  public static function getAjax()
  {
    $data = ModMyFeedbackHelper::getData();
    return ModMyFeedbackHelper::sendEmail($data);
  }
  public static function getData()
  {
    $input = JFactory::getApplication()->input;
    $data = $input->getString('data');
    return json_decode($data, true);
  }
  public static function sendEmail($data)
  {
    $letter = '';
    foreach ($data as $row) {
      $letter .= '<p>' . $row['name'] . ': ' . $row['value'] . '</p>';
    }
    return $letter;
  }
}