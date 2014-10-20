<?php
 
defined('_JEXEC') or die;
 
class ModMyFeedbackHelper
{
  public static function getAjax()
  {
    $data = ModMyFeedbackHelper::getData();
    return $data[1];
  }
  public static function getData()
  {
    $input = JFactory::getApplication()->input;
    $data = $input->getString('data');
    return json_decode($data, true);
  }
}