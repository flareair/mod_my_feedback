<?php
 
defined('_JEXEC') or die;
 
class ModMyFeedbackHelper
{
  public static function getAjax()
  {
    $input = JFactory::getApplication()->input;
    $firstname  = $input->get('firstname');
    $lastname  = $input->get('lastname');
    $data = $input->get('data');
    return  json_encode($data);
  }
}