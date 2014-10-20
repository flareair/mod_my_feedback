<?php
 
defined('_JEXEC') or die;
 
class ModMyFeedbackHelper
{
  public static function getAjax()
  {
    $input = JFactory::getApplication()->input;
    $firstname  = $input->getString('firstname');
    $lastname  = $input->getString('lastname');
    $data = $input->getString('data');
    $formData = json_decode($data);
    return  $formData;
  }
}