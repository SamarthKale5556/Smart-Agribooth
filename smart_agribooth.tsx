import React, { useState, useEffect } from 'react';
import { 
  Home, 
  TestTube, 
  Heart, 
  FileText, 
  MapPin, 
  Download, 
  Menu, 
  X, 
  Shield,
  Wifi,
  WifiOff,
  ChevronRight,
  User,
  Phone,
  Mail,
  Bell,
  MessageCircle,
  Award,
  TrendingUp,
  BarChart3,
  Upload,
  Play,
  Target,
  Zap,
  Users,
  Building,
  Calendar,
  Star,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, RadialBarChart, RadialBar } from 'recharts';

const SmartAgribooth = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [showPrivacyBanner, setShowPrivacyBanner] = useState(true);
  const [userType, setUserType] = useState('farmer'); // farmer or operator
  const [showNotification, setShowNotification] = useState(false);
  const [farmerProfile, setFarmerProfile] = useState({
    name: 'राम कुमार शर्मा',
    id: 'F001234',
    phone: '+91 9876543210',
    landSize: '3.2 Acres',
    location: 'Village Khedi, Dist. Indore',
    joinDate: '2023-01-15',
    totalReports: 12,
    loyaltyPoints: 250
  });

  // Language translations (extended)
  const translations = {
    en: {
      title: "Smart Agribooth",
      tagline: "AI-Powered Digital Solutions for Modern Farmers",
      soilHealth: "Soil Health",
      livestock: "Livestock Monitor",
      schemes: "Govt Schemes",
      landRecords: "Land Records",
      dashboard: "Dashboard",
      home: "Home",
      welcome: "Welcome to Smart Agribooth",
      description: "Your AI-powered one-stop digital platform for modern farming solutions",
      getStarted: "Get Started",
      privacyText: "We protect your data with advanced security measures",
      offlineMode: "Offline Mode - Data will sync when connected",
      downloadReport: "Download Report",
      aiPowered: "AI-Powered Analysis",
      demoData: "Use Demo Data",
      uploadFile: "Upload Soil Test",
      dashboard: "My Dashboard",
      notifications: "Notifications",
      loyaltyPoints: "Loyalty Points",
      analytics: "Analytics"
    },
    hi: {
      title: "स्मार्ट एग्रीबूथ",
      tagline: "आधुनिक किसानों के लिए AI-संचालित डिजिटल समाधान",
      soilHealth: "मिट्टी स्वास्थ्य",
      livestock: "पशुधन मॉनिटर",
      schemes: "सरकारी योजनाएं",
      landRecords: "भूमि रिकॉर्ड",
      dashboard: "डैशबोर्ड",
      home: "होम",
      welcome: "स्मार्ट एग्रीबूथ में आपका स्वागत है",
      description: "आधुनिक कृषि समाधान के लिए आपका AI-संचालित एक-स्टॉप डिजिटल प्लेटफॉर्म",
      getStarted: "शुरू करें",
      privacyText: "हम उन्नत सुरक्षा उपायों से आपके डेटा की सुरक्षा करते हैं",
      offlineMode: "ऑफलाइन मोड - कनेक्ट होने पर डेटा सिंक होगा",
      downloadReport: "रिपोर्ट डाउनलोड करें",
      aiPowered: "AI-संचालित विश्लेषण",
      demoData: "डेमो डेटा का उपयोग करें",
      uploadFile: "मिट्टी परीक्षण अपलोड करें",
      dashboard: "मेरा डैशबोर्ड",
      notifications: "सूचनाएं",
      loyaltyPoints: "लॉयल्टी पॉइंट्स",
      analytics: "एनालिटिक्स"
    },
    mr: {
      title: "स्मार्ट एग्रीबूथ",
      tagline: "आधुनिक शेतकऱ्यांसाठी AI-चालित डिजिटल समाधान",
      soilHealth: "माती आरोग्य",
      livestock: "पशुधन मॉनिटर",
      schemes: "सरकारी योजना",
      landRecords: "जमीन रेकॉर्ड",
      dashboard: "डॅशबोर्ड",
      home: "होम",
      welcome: "स्मार्ट एग्रीबूथमध्ये आपले स्वागत",
      description: "आधुनिक शेती समाधानासाठी आपले AI-चालित एक-स्टॉप डिजिटल प्लॅटफॉर्म",
      getStarted: "सुरुवात करा",
      privacyText: "आम्ही प्रगत सुरक्षा उपायांसह आपल्या डेटाचे संरक्षण करतो",
      offlineMode: "ऑफलाइन मोड - जोडल्यावर डेटा सिंक होईल",
      downloadReport: "अहवाल डाउनलोड करा",
      aiPowered: "AI-चालित विश्लेषण",
      demoData: "डेमो डेटा वापरा",
      uploadFile: "माती चाचणी अपलोड करा",
      dashboard: "माझा डॅशबोर्ड",
      notifications: "सूचना",
      loyaltyPoints: "लॉयल्टी पॉइंट्स",
      analytics: "अॅनालिटिक्स"
    }
  };

  const t = translations[language];

  // Mock data for analytics
  const soilTrendData = [
    { month: 'Jan', nitrogen: 180, phosphorus: 12, potassium: 140 },
    { month: 'Feb', nitrogen: 190, phosphorus: 15, potassium: 145 },
    { month: 'Mar', nitrogen: 200, phosphorus: 18, potassium: 150 },
    { month: 'Apr', nitrogen: 210, phosphorus: 20, potassium: 155 },
    { month: 'May', nitrogen: 220, phosphorus: 22, potassium: 160 },
    { month: 'Jun', nitrogen: 230, phosphorus: 25, potassium: 165 }
  ];

  const cattleHealthData = [
    { month: 'Jan', healthy: 85, needsAttention: 15 },
    { month: 'Feb', healthy: 88, needsAttention: 12 },
    { month: 'Mar', healthy: 92, needsAttention: 8 },
    { month: 'Apr', healthy: 89, needsAttention: 11 },
    { month: 'May', healthy: 94, needsAttention: 6 },
    { month: 'Jun', healthy: 96, needsAttention: 4 }
  ];

  const comparisonData = [
    { name: 'Your Farm', nitrogen: 230, phosphorus: 25, potassium: 165 },
    { name: 'Village Avg', nitrogen: 200, phosphorus: 18, potassium: 145 }
  ];

  // Enhanced Soil Health Component
  const SoilHealthModule = () => {
    const [analysisMethod, setAnalysisMethod] = useState('upload'); // upload, manual, demo
    const [soilData, setSoilData] = useState({
      nitrogen: '',
      phosphorus: '',
      potassium: '',
      ph: '',
      organicMatter: ''
    });
    const [report, setReport] = useState(null);
    const [uploadedFile, setUploadedFile] = useState(null);

    const demoSoilData = {
      nitrogen: 230,
      phosphorus: 25,
      potassium: 165,
      ph: 6.8,
      organicMatter: 3.2
    };

    const optimalRanges = {
      nitrogen: { min: 200, max: 300, unit: 'kg/ha' },
      phosphorus: { min: 20, max: 40, unit: 'kg/ha' },
      potassium: { min: 150, max: 250, unit: 'kg/ha' },
      ph: { min: 6.0, max: 7.5, unit: '' },
      organicMatter: { min: 2.5, max: 4.0, unit: '%' }
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        setUploadedFile(file.name);
        // Simulate file processing and use demo data
        setTimeout(() => {
          setSoilData(demoSoilData);
          generateReport(demoSoilData);
        }, 1500);
      }
    };

    const useDemoData = () => {
      setSoilData(demoSoilData);
      generateReport(demoSoilData);
    };

    const generateReport = (data = soilData) => {
      const { nitrogen, phosphorus, potassium, ph, organicMatter } = data;
      
      const recommendations = [];
      const warnings = [];
      
      // AI-powered recommendations logic
      if (nitrogen < optimalRanges.nitrogen.min) {
        recommendations.push("Apply Urea fertilizer (46-0-0) - 50kg/acre");
        warnings.push("Low Nitrogen detected");
      } else if (nitrogen > optimalRanges.nitrogen.max) {
        warnings.push("Excess Nitrogen - reduce fertilizer application");
      }
      
      if (phosphorus < optimalRanges.phosphorus.min) {
        recommendations.push("Use DAP fertilizer (18-46-0) - 30kg/acre");
        warnings.push("Phosphorus deficiency detected");
      }
      
      if (potassium < optimalRanges.potassium.min) {
        recommendations.push("Apply MOP fertilizer (0-0-60) - 25kg/acre");
        warnings.push("Potassium levels below optimal");
      }
      
      if (ph < optimalRanges.ph.min) {
        recommendations.push("Add lime (CaCO3) to increase pH - 200kg/acre");
      } else if (ph > optimalRanges.ph.max) {
        recommendations.push("Add sulfur to decrease pH - 50kg/acre");
      }
      
      if (organicMatter < optimalRanges.organicMatter.min) {
        recommendations.push("Apply organic compost - 2 tons/acre");
        warnings.push("Low organic matter content");
      }

      const overallScore = calculateSoilScore(data);
      
      const reportData = {
        date: new Date().toLocaleDateString(),
        values: data,
        score: overallScore,
        status: overallScore >= 80 ? "Excellent" : overallScore >= 60 ? "Good" : "Needs Improvement",
        recommendations: recommendations.length === 0 ? ["Your soil is in excellent condition!"] : recommendations,
        warnings: warnings,
        aiInsights: [
          "Based on historical data, your soil nitrogen has improved by 15% over last 3 months",
          "Recommended crop rotation: Wheat → Legumes → Maize for optimal nutrient cycling",
          "Next soil test recommended in 6 months"
        ]
      };

      setReport(reportData);
      
      // Show reward notification
      setTimeout(() => {
        setShowNotification(true);
        setFarmerProfile(prev => ({
          ...prev,
          loyaltyPoints: prev.loyaltyPoints + 10,
          totalReports: prev.totalReports + 1
        }));
      }, 2000);
    };

    const calculateSoilScore = (data) => {
      let score = 0;
      const factors = ['nitrogen', 'phosphorus', 'potassium', 'ph', 'organicMatter'];
      
      factors.forEach(factor => {
        const value = parseFloat(data[factor]);
        const range = optimalRanges[factor];
        
        if (value >= range.min && value <= range.max) {
          score += 20;
        } else if (value >= range.min * 0.8 && value <= range.max * 1.2) {
          score += 15;
        } else {
          score += 5;
        }
      });
      
      return score;
    };

    const getStatusColor = (value, range) => {
      const val = parseFloat(value);
      if (val >= range.min && val <= range.max) return 'text-green-600 bg-green-50';
      if (val >= range.min * 0.8 && val <= range.max * 1.2) return 'text-yellow-600 bg-yellow-50';
      return 'text-red-600 bg-red-50';
    };

    const getStatusIcon = (value, range) => {
      const val = parseFloat(value);
      if (val >= range.min && val <= range.max) return <CheckCircle className="text-green-600" size={16} />;
      if (val >= range.min * 0.8 && val <= range.max * 1.2) return <AlertTriangle className="text-yellow-600" size={16} />;
      return <X className="text-red-600" size={16} />;
    };

    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Zap className="text-blue-500" size={32} />
          <h2 className="text-2xl font-bold text-center text-green-800">
            {t.aiPowered} {t.soilHealth} Analysis
          </h2>
        </div>
        
        {/* Analysis Method Selection */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Choose Analysis Method</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => setAnalysisMethod('upload')}
              className={`p-4 border-2 rounded-lg transition-all ${
                analysisMethod === 'upload' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <Upload className="mx-auto mb-2 text-blue-600" size={32} />
              <div className="font-semibold">{t.uploadFile}</div>
              <div className="text-sm text-gray-600">CSV, Excel, JSON</div>
            </button>
            
            <button
              onClick={() => setAnalysisMethod('demo')}
              className={`p-4 border-2 rounded-lg transition-all ${
                analysisMethod === 'demo' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'
              }`}
            >
              <TestTube className="mx-auto mb-2 text-green-600" size={32} />
              <div className="font-semibold">{t.demoData}</div>
              <div className="text-sm text-gray-600">Quick Analysis</div>
            </button>
            
            <button
              onClick={() => setAnalysisMethod('manual')}
              className={`p-4 border-2 rounded-lg transition-all ${
                analysisMethod === 'manual' ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <User className="mx-auto mb-2 text-purple-600" size={32} />
              <div className="font-semibold">Manual Entry</div>
              <div className="text-sm text-gray-600">Enter values</div>
            </button>
          </div>

          {/* Upload Method */}
          {analysisMethod === 'upload' && (
            <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center">
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                id="soil-file-upload"
                accept=".csv,.xlsx,.json"
              />
              <label htmlFor="soil-file-upload" className="cursor-pointer">
                <Upload size={48} className="mx-auto mb-4 text-blue-400" />
                <div className="text-lg font-semibold text-blue-600">Upload Soil Test Report</div>
                <div className="text-gray-600">CSV, Excel, or JSON files</div>
              </label>
              {uploadedFile && (
                <div className="mt-4 text-green-600">
                  <CheckCircle className="inline mr-2" size={16} />
                  Processing: {uploadedFile}
                </div>
              )}
            </div>
          )}

          {/* Demo Data Method */}
          {analysisMethod === 'demo' && (
            <div className="text-center">
              <button
                onClick={useDemoData}
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <TestTube className="inline mr-2" size={20} />
                Use Demo Soil Data
              </button>
            </div>
          )}

          {/* Manual Entry Method */}
          {analysisMethod === 'manual' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nitrogen (N) - kg/ha</label>
                  <input
                    type="number"
                    value={soilData.nitrogen}
                    onChange={(e) => setSoilData({...soilData, nitrogen: e.target.value})}
                    className="w-full p-3 border rounded-lg text-lg"
                    placeholder="Enter N value"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phosphorus (P) - kg/ha</label>
                  <input
                    type="number"
                    value={soilData.phosphorus}
                    onChange={(e) => setSoilData({...soilData, phosphorus: e.target.value})}
                    className="w-full p-3 border rounded-lg text-lg"
                    placeholder="Enter P value"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Potassium (K) - kg/ha</label>
                  <input
                    type="number"
                    value={soilData.potassium}
                    onChange={(e) => setSoilData({...soilData, potassium: e.target.value})}
                    className="w-full p-3 border rounded-lg text-lg"
                    placeholder="Enter K value"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">pH Level</label>
                  <input
                    type="number"
                    step="0.1"
                    value={soilData.ph}
                    onChange={(e) => setSoilData({...soilData, ph: e.target.value})}
                    className="w-full p-3 border rounded-lg text-lg"
                    placeholder="Enter pH value"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Organic Matter (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={soilData.organicMatter}
                    onChange={(e) => setSoilData({...soilData, organicMatter: e.target.value})}
                    className="w-full p-3 border rounded-lg text-lg"
                    placeholder="Enter organic matter percentage"
                  />
                </div>
              </div>
              
              <button
                onClick={() => generateReport()}
                className="w-full bg-purple-600 text-white p-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                <Zap className="inline mr-2" size={20} />
                Generate AI Analysis
              </button>
            </div>
          )}
        </div>

        {/* Soil Health Report Dashboard */}
        {report && (
          <div className="space-y-6">
            {/* Overall Score */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">AI-Powered Soil Health Report</h3>
                <button
                  onClick={() => alert('PDF Report downloaded successfully!')}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download size={20} />
                  {t.downloadReport}
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600">{report.score}%</div>
                  <div className="text-gray-600">Overall Soil Score</div>
                </div>
                <div className="text-center">
                  <span className={`px-4 py-2 rounded-full text-lg font-medium ${
                    report.status === 'Excellent' ? 'bg-green-100 text-green-800' :
                    report.status === 'Good' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{report.date}</div>
                  <div className="text-gray-600">Analysis Date</div>
                </div>
              </div>
            </div>

            {/* Detailed Soil Parameters */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Detailed Soil Analysis</h4>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3">Parameter</th>
                      <th className="text-center p-3">Your Value</th>
                      <th className="text-center p-3">Optimal Range</th>
                      <th className="text-center p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(report.values).map(([key, value]) => {
                      const range = optimalRanges[key];
                      return (
                        <tr key={key} className="border-b">
                          <td className="p-3 font-medium capitalize">
                            {key.replace(/([A-Z])/g, ' $1')} ({range.unit})
                          </td>
                          <td className={`text-center p-3 font-bold ${getStatusColor(value, range)}`}>
                            {value} {range.unit}
                          </td>
                          <td className="text-center p-3 text-gray-600">
                            {range.min} - {range.max} {range.unit}
                          </td>
                          <td className="text-center p-3">
                            {getStatusIcon(value, range)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Target className="text-green-600" size={20} />
                  AI Recommendations
                </h4>
                <ul className="space-y-3">
                  {report.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={16} className="mt-1 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Info className="text-blue-600" size={20} />
                  AI Insights
                </h4>
                <ul className="space-y-3">
                  {report.aiInsights.map((insight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Zap size={16} className="mt-1 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Warnings */}
            {report.warnings.length > 0 && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-yellow-800">
                  <AlertTriangle className="text-yellow-600" size={20} />
                  Attention Required
                </h4>
                <ul className="space-y-2">
                  {report.warnings.map((warning, index) => (
                    <li key={index} className="text-yellow-800">• {warning}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Soil Trends Chart */}
        {report && (
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <h4 className="text-lg font-semibold mb-4">Soil Nutrient Trends (Last 6 Months)</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={soilTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="nitrogen" stroke="#3B82F6" strokeWidth={3} />
                  <Line type="monotone" dataKey="phosphorus" stroke="#EF4444" strokeWidth={3} />
                  <Line type="monotone" dataKey="potassium" stroke="#10B981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500"></div>
                <span className="text-sm">Nitrogen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500"></div>
                <span className="text-sm">Phosphorus</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500"></div>
                <span className="text-sm">Potassium</span>
              </div>
            </div>
          </div>
        )}

        {/* Farm vs Village Comparison */}
        {report && (
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <h4 className="text-lg font-semibold mb-4">Your Farm vs Village Average</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="nitrogen" fill="#3B82F6" />
                  <Bar dataKey="phosphorus" fill="#EF4444" />
                  <Bar dataKey="potassium" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Enhanced Dashboard Component
  const DashboardModule = () => {
    const recentReports = [
      { date: '2024-01-15', type: 'Soil Test', score: 85, status: 'Good' },
      { date: '2024-01-10', type: 'Cattle Health', score: 92, status: 'Excellent' },
      { date: '2024-01-05', type: 'Soil Test', score: 78, status: 'Fair' },
      { date: '2023-12-28', type: 'Cattle Health', score: 88, status: 'Good' }
    ];

    const yieldData = [
      { crop: 'Wheat', yield: 4.2, target: 4.0 },
      { crop: 'Cotton', yield: 3.8, target: 3.5 },
      { crop: 'Maize', yield: 5.1, target: 4.8 }
    ];

    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center gap-3 mb-6">
          <User className="text-blue-600" size={32} />
          <h2 className="text-2xl font-bold text-gray-800">Farmer Dashboard</h2>
        </div>

        {/* Profile Card */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg shadow-lg p-6 text-white mb-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <User size={48} className="text-green-600" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">{farmerProfile.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="opacity-80">Farmer ID</div>
                  <div className="font-semibold">{farmerProfile.id}</div>
                </div>
                <div>
                  <div className="opacity-80">Land Size</div>
                  <div className="font-semibold">{farmerProfile.landSize}</div>
                </div>
                <div>
                  <div className="opacity-80">Location</div>
                  <div className="font-semibold">{farmerProfile.location}</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold">{farmerProfile.loyaltyPoints}</div>
              <div className="text-sm opacity-80">Loyalty Points</div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <TestTube className="text-green-600 mx-auto mb-2" size={32} />
            <div className="text-2xl font-bold text-gray-800">{farmerProfile.totalReports}</div>
            <div className="text-sm text-gray-600">Total Reports</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <Award className="text-yellow-600 mx-auto mb-2" size={32} />
            <div className="text-2xl font-bold text-gray-800">{farmerProfile.loyaltyPoints}</div>
            <div className="text-sm text-gray-600">Loyalty Points</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <TrendingUp className="text-blue-600 mx-auto mb-2" size={32} />
            <div className="text-2xl font-bold text-gray-800">5.2%</div>
            <div className="text-sm text-gray-600">Yield Increase</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <Calendar className="text-purple-600 mx-auto mb-2" size={32} />
            <div className="text-2xl font-bold text-gray-800">₹15,600</div>
            <div className="text-sm text-gray-600">Benefits Claimed</div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="text-blue-600" size={20} />
              Recent Reports
            </h4>
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{report.type}</div>
                    <div className="text-sm text-gray-600">{report.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-800">{report.score}%</div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      report.status === 'Excellent' ? 'bg-green-100 text-green-800' :
                      report.status === 'Good' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Yield Comparison */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="text-green-600" size={20} />
              Crop Yield Performance
            </h4>
            <div className="space-y-4">
              {yieldData.map((crop, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{crop.crop}</span>
                    <span className="text-sm">
                      {crop.yield}t/ha (Target: {crop.target}t/ha)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        crop.yield >= crop.target ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: `${Math.min((crop.yield / crop.target) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Soil Health Trend */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Soil Health Trend</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={soilTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="nitrogen" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Cattle Health Distribution */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Cattle Health Status</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Healthy', value: 85, fill: '#10B981' },
                      { name: 'Needs Attention', value: 15, fill: '#F59E0B' }
                    ]}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Livestock Component with Analytics
  const LivestockModule = () => {
    const [selectedCattle, setSelectedCattle] = useState('');
    const [healthReport, setHealthReport] = useState(null);

    const cattleData = {
      'COW001': { name: 'Ganga', status: 'Healthy', temp: '38.5°C', heartRate: '60 bpm', lastCheckup: '2024-01-10', milkYield: '12L/day' },
      'COW002': { name: 'Lakshmi', status: 'Needs Vet', temp: '39.8°C', heartRate: '75 bpm', lastCheckup: '2024-01-08', milkYield: '8L/day' },
      'BUF001': { name: 'Krishna', status: 'Healthy', temp: '38.2°C', heartRate: '58 bpm', lastCheckup: '2024-01-12', milkYield: '15L/day' },
      'BUF002': { name: 'Radha', status: 'Needs Vet', temp: '40.1°C', heartRate: '80 bpm', lastCheckup: '2024-01-05', milkYield: '10L/day' }
    };

    const checkHealth = () => {
      if (selectedCattle) {
        setHealthReport(cattleData[selectedCattle]);
      }
    };

    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Heart className="text-red-500" size={32} />
          <h2 className="text-2xl font-bold text-center text-blue-800">
            AI-Powered {t.livestock} Dashboard
          </h2>
        </div>
        
        {/* Livestock Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">4</div>
            <div className="text-sm text-gray-600">Total Cattle</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">2</div>
            <div className="text-sm text-gray-600">Healthy</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">2</div>
            <div className="text-sm text-gray-600">Need Attention</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">45L</div>
            <div className="text-sm text-gray-600">Daily Milk</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Select Cattle for Health Check</label>
            <select
              value={selectedCattle}
              onChange={(e) => setSelectedCattle(e.target.value)}
              className="w-full p-3 border rounded-lg text-lg"
            >
              <option value="">Choose Cattle</option>
              {Object.keys(cattleData).map(id => (
                <option key={id} value={id}>{id} - {cattleData[id].name}</option>
              ))}
            </select>
          </div>
          
          <button
            onClick={checkHealth}
            disabled={!selectedCattle}
            className="w-full bg-blue-600 text-white p-4 rounded-lg text-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
          >
            <Zap size={20} />
            AI Health Analysis
          </button>
        </div>

        {healthReport && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">AI Health Report - {healthReport.name}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <span className={`inline-block px-4 py-2 rounded-full text-lg font-medium ${
                    healthReport.status === 'Healthy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {healthReport.status}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <p><strong>Temperature:</strong> {healthReport.temp}</p>
                  <p><strong>Heart Rate:</strong> {healthReport.heartRate}</p>
                </div>
                
                <div className="space-y-2">
                  <p><strong>Milk Yield:</strong> {healthReport.milkYield}</p>
                  <p><strong>Last Checkup:</strong> {healthReport.lastCheckup}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Target className="text-blue-600" size={18} />
                    AI Recommendations
                  </h4>
                  {healthReport.status === 'Healthy' ? (
                    <ul className="space-y-2 text-green-700">
                      <li>• Continue regular feeding schedule</li>
                      <li>• Maintain clean water supply</li>
                      <li>• Schedule next checkup in 2 weeks</li>
                      <li>• Monitor milk production daily</li>
                    </ul>
                  ) : (
                    <ul className="space-y-2 text-red-700">
                      <li>• Contact veterinarian immediately</li>
                      <li>• Monitor temperature every 4 hours</li>
                      <li>• Isolate from other cattle</li>
                      <li>• Reduce feed until fever subsides</li>
                      <li>• Administer prescribed medication</li>
                    </ul>
                  )}
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Info className="text-purple-600" size={18} />
                    Health Insights
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Temperature trend: {healthReport.status === 'Healthy' ? 'Stable' : 'Rising'}</li>
                    <li>• Activity level: {healthReport.status === 'Healthy' ? 'Normal' : 'Reduced'}</li>
                    <li>• Feed intake: {healthReport.status === 'Healthy' ? 'Regular' : 'Decreased'}</li>
                    <li>• Vaccination status: Up to date</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cattle Health Trends */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Cattle Health Trends (Last 6 Months)</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={cattleHealthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="healthy" fill="#10B981" />
                    <Bar dataKey="needsAttention" fill="#F59E0B" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500"></div>
                  <span className="text-sm">Healthy (%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500"></div>
                  <span className="text-sm">Needs Attention (%)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Enhanced Schemes Component
  const SchemesModule = () => {
    const schemes = [
      {
        name: "PM-Kisan Samman Nidhi",
        description: "Direct income support of ₹6000 per year to farmer families",
        eligibility: "Small and marginal farmers",
        amount: "₹6,000/year",
        status: "Active",
        applied: true,
        beneficiaries: "12 Crore+",
        sponsor: "Ministry of Agriculture"
      },
      {
        name: "Soil Health Card Scheme",
        description: "Free soil testing and health cards for farmers",
        eligibility: "All farmers",
        amount: "Free",
        status: "Active",
        applied: false,
        beneficiaries: "5.8 Crore+",
        sponsor: "Department of Agriculture"
      },
      {
        name: "Pradhan Mantri Fasal Bima Yojana",
        description: "Crop insurance scheme to protect farmers from crop losses",
        eligibility: "All farmers",
        amount: "Variable premium",
        status: "Active",
        applied: true,
        beneficiaries: "3.6 Crore+",
        sponsor: "Ministry of Agriculture"
      },
      {
        name: "Kisan Credit Card",
        description: "Easy access to credit for agriculture and allied activities",
        eligibility: "All farmers",
        amount: "Up to ₹3 lakh",
        status: "Active",
        applied: false,
        beneficiaries: "7 Crore+",
        sponsor: "Department of Financial Services"
      }
    ];

    const applyScheme = (schemeName) => {
      alert(`Application initiated for ${schemeName}. You will be redirected to the official portal.`);
      // Simulate points reward
      setTimeout(() => {
        setShowNotification(true);
        setFarmerProfile(prev => ({
          ...prev,
          loyaltyPoints: prev.loyaltyPoints + 20
        }));
      }, 1000);
    };

    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <FileText className="text-purple-500" size={32} />
          <h2 className="text-2xl font-bold text-center text-purple-800">
            {t.schemes} & Benefits
          </h2>
        </div>

        {/* Schemes Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">₹15,600</div>
            <div className="text-sm text-gray-600">Benefits Received</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">2</div>
            <div className="text-sm text-gray-600">Active Applications</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">4</div>
            <div className="text-sm text-gray-600">Available Schemes</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">28M+</div>
            <div className="text-sm text-gray-600">Total Beneficiaries</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schemes.map((scheme, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-800 flex-1">{scheme.name}</h3>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {scheme.status}
                  </span>
                  {scheme.applied && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      Applied
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600">AI-powered soil analysis with fertilizer recommendations</p>
          </div>

          <div
            onClick={() => setCurrentPage('livestock')}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow border-l-4 border-blue-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart size={32} className="text-blue-600" />
              <Zap size={16} className="text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart {t.livestock}</h3>
            <p className="text-gray-600">AI-powered cattle health monitoring and alerts</p>
          </div>

          <div
            onClick={() => setCurrentPage('schemes')}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow border-l-4 border-purple-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText size={32} className="text-purple-600" />
              <Building size={16} className="text-gray-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t.schemes}</h3>
            <p className="text-gray-600">Direct integration with government benefit programs</p>
          </div>

          <div
            onClick={() => setCurrentPage('land')}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow border-l-4 border-orange-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={32} className="text-orange-600" />
              <Shield size={16} className="text-green-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Digital {t.landRecords}</h3>
            <p className="text-gray-600">Blockchain-secured land document management</p>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Platform Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">200+</div>
              <div className="text-gray-600">Farmers per Kiosk/Month</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">5-6%</div>
              <div className="text-gray-600">Average Yield Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">₹2,500</div>
              <div className="text-gray-600">Cost Savings/Farmer</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h3 className="text-lg font-semibold mb-6 text-center">Proudly Supported By</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <Building className="mx-auto mb-2 text-blue-600" size={32} />
              <div className="text-sm font-medium">Ministry of Agriculture</div>
              <div className="text-xs text-gray-600">Government of India</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <TestTube className="mx-auto mb-2 text-green-600" size={32} />
              <div className="text-sm font-medium">Fertilizer Corp Ltd</div>
              <div className="text-xs text-gray-600">Technology Partner</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <Users className="mx-auto mb-2 text-purple-600" size={32} />
              <div className="text-sm font-medium">AgTech Solutions</div>
              <div className="text-xs text-gray-600">Innovation Partner</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <Heart className="mx-auto mb-2 text-red-600" size={32} />
              <div className="text-sm font-medium">Rural Development Bank</div>
              <div className="text-xs text-gray-600">Financial Partner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // SMS/WhatsApp Notification Simulation
  const SMSNotificationPopup = () => {
    const [showSMS, setShowSMS] = useState(false);

    useEffect(() => {
      // Show SMS notification randomly
      const interval = setInterval(() => {
        if (Math.random() > 0.97) {
          setShowSMS(true);
          setTimeout(() => setShowSMS(false), 4000);
        }
      }, 5000);

      return () => clearInterval(interval);
    }, []);

    if (!showSMS) return null;

    return (
      <div className="fixed bottom-20 left-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
        <div className="flex items-start gap-3">
          <MessageCircle className="text-white flex-shrink-0" size={20} />
          <div className="flex-1">
            <div className="font-semibold text-sm">SMS Alert 📱</div>
            <div className="text-xs mt-1">
              "Your soil test results are ready! Nitrogen: 230 kg/ha. Click to view recommendations. -SmartAgribooth"
            </div>
            <div className="text-xs mt-2 opacity-75">+91 9876543210</div>
          </div>
          <button 
            onClick={() => setShowSMS(false)}
            className="text-white hover:text-gray-200 flex-shrink-0"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    );
  };

  // Privacy Banner
  const PrivacyBanner = () => {
    if (!showPrivacyBanner) return null;
    
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield size={20} className="text-green-400" />
            <span className="text-sm">{t.privacyText}</span>
          </div>
          <button
            onClick={() => setShowPrivacyBanner(false)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm"
          >
            I Understand
          </button>
        </div>
      </div>
    );
  };

  // Offline Status Banner
  const OfflineBanner = () => {
    if (isOnline) return null;
    
    return (
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
        <div className="flex items-center gap-3">
          <WifiOff size={20} className="text-yellow-600" />
          <span className="text-yellow-800">{t.offlineMode}</span>
        </div>
      </div>
    );
  };

  // Contact Info Footer
  const Footer = () => (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Zap className="text-blue-400" size={20} />
              Smart Agribooth
            </h3>
            <p className="text-gray-300">AI-powered digital solutions empowering farmers with modern agriculture technology.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Support</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>1800-123-4567 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@smartagribooth.gov.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span>WhatsApp: +91 9876543210</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-gray-300">
              <div>Help & FAQ</div>
              <div>User Manual</div>
              <div>Government Portal</div>
              <div>Training Videos</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Impact Stats</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <div>• 200+ farmers served/kiosk/month</div>
              <div>• 5-6% average yield improvement</div>
              <div>• ₹2,500 cost savings per farmer</div>
              <div>• 10,000+ active users nationwide</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Smart Agribooth. A Digital India Initiative powered by AI.</p>
          <div className="mt-2 text-sm">
            <span className="text-green-400">🚀 Phase 1:</span> Software Platform → 
            <span className="text-blue-400 ml-2">🔄 Phase 2:</span> IoT Integration → 
            <span className="text-purple-400 ml-2">🎯 Phase 3:</span> Full Automation
          </div>
        </div>
      </div>
    </footer>
  );

  // Simulate online/offline status and notifications
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly simulate offline status for demo
      if (Math.random() > 0.98) {
        setIsOnline(false);
        setTimeout(() => setIsOnline(true), 3000);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Main App Component
  const renderCurrentPage = () => {
    if (currentPage === 'login') return <LoginModule />;
    
    switch (currentPage) {
      case 'dashboard':
        return <DashboardModule />;
      case 'soil':
        return <SoilHealthModule />;
      case 'livestock':
        return <LivestockModule />;
      case 'schemes':
        return <SchemesModule />;
      case 'land':
        return <LandRecordsModule />;
      case 'analytics':
        return <AnalyticsModule />;
      case 'demo':
        return <VideoDemoModule />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <OfflineBanner />
      
      <main className="pb-16">
        {renderCurrentPage()}
      </main>
      
      <Footer />
      <PrivacyBanner />
      <NotificationPopup />
      <SMSNotificationPopup />
    </div>
  );
};

export default SmartAgribooth; mb-4">{scheme.description}</p>
              
              <div className="space-y-2 mb-4">
                <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
                <p><strong>Benefit:</strong> {scheme.amount}</p>
                <p><strong>Beneficiaries:</strong> {scheme.beneficiaries}</p>
                <p className="text-sm text-gray-500">Sponsored by: {scheme.sponsor}</p>
              </div>
              
              <button
                onClick={() => applyScheme(scheme.name)}
                disabled={scheme.applied}
                className={`w-full p-3 rounded-lg font-semibold transition-colors ${
                  scheme.applied 
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {scheme.applied ? 'Application Submitted' : 'Apply Now'}
              </button>
            </div>
          ))}
        </div>

        {/* Partner Integration Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">Government & Partner Integrations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <Building className="mx-auto mb-2 text-blue-600" size={32} />
              <div className="text-sm font-medium">Digital India Portal</div>
              <div className="text-xs text-gray-600">API Connected</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <TestTube className="mx-auto mb-2 text-green-600" size={32} />
              <div className="text-sm font-medium">Fertilizer Partners</div>
              <div className="text-xs text-gray-600">Real-time Pricing</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <Heart className="mx-auto mb-2 text-red-600" size={32} />
              <div className="text-sm font-medium">Vet Network</div>
              <div className="text-xs text-gray-600">24/7 Support</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <BarChart3 className="mx-auto mb-2 text-purple-600" size={32} />
              <div className="text-sm font-medium">Market Linkage</div>
              <div className="text-xs text-gray-600">Price Discovery</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Land Records Component
  const LandRecordsModule = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [records] = useState([
      {
        surveyNo: "123/1A",
        area: "2.5 Acres",
        ownerName: "राम कुमार शर्मा",
        cropType: "Wheat",
        season: "Rabi 2024",
        soilType: "Loamy",
        irrigation: "Canal"
      },
      {
        surveyNo: "124/2B",
        area: "1.8 Acres", 
        ownerName: "राम कुमार शर्मा",
        cropType: "Cotton",
        season: "Kharif 2024",
        soilType: "Clay",
        irrigation: "Borewell"
      }
    ]);

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        setUploadedFile(file.name);
        alert("Document uploaded and verified successfully!");
        // Simulate points reward
        setTimeout(() => {
          setShowNotification(true);
          setFarmerProfile(prev => ({
            ...prev,
            loyaltyPoints: prev.loyaltyPoints + 15
          }));
        }, 1000);
      }
    };

    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <MapPin className="text-orange-500" size={32} />
          <h2 className="text-2xl font-bold text-center text-orange-800">
            Digital {t.landRecords}
          </h2>
        </div>

        {/* Land Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">4.3</div>
            <div className="text-sm text-gray-600">Total Acres</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">2</div>
            <div className="text-sm text-gray-600">Survey Numbers</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <div className="text-sm text-gray-600">Digitized</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">₹8.5L</div>
            <div className="text-sm text-gray-600">Estimated Value</div>
          </div>
        </div>
        
        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Upload className="text-blue-600" size={20} />
            Upload Land Documents
          </h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
              accept=".pdf,.jpg,.png"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center gap-2"
            >
              <FileText size={48} className="text-gray-400" />
              <span className="text-gray-600 text-lg">Click to upload documents</span>
              <span className="text-sm text-gray-500">PDF, JPG, PNG files accepted</span>
            </label>
            {uploadedFile && (
              <div className="mt-4 text-green-600 flex items-center justify-center gap-2">
                <CheckCircle size={16} />
                <span>Uploaded & Verified: {uploadedFile}</span>
              </div>
            )}
          </div>
        </div>

        {/* Existing Records */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FileText className="text-orange-600" size={20} />
            Your Land Records
          </h3>
          
          <div className="space-y-4">
            {records.map((record, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p><strong>Survey No:</strong> {record.surveyNo}</p>
                    <p><strong>Area:</strong> {record.area}</p>
                    <p><strong>Owner:</strong> {record.ownerName}</p>
                  </div>
                  <div>
                    <p><strong>Crop:</strong> {record.cropType}</p>
                    <p><strong>Season:</strong> {record.season}</p>
                    <p><strong>Soil Type:</strong> {record.soilType}</p>
                  </div>
                  <div>
                    <p><strong>Irrigation:</strong> {record.irrigation}</p>
                    <div className="mt-3 space-x-2">
                      <button className="bg-orange-600 text-white px-3 py-1 rounded text-sm hover:bg-orange-700 transition-colors">
                        View Details
                      </button>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blockchain Verification */}
        <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Shield className="text-green-600" size={20} />
            Blockchain Verified Records
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <CheckCircle className="text-green-600 mx-auto mb-2" size={32} />
              <div className="font-medium">Tamper Proof</div>
              <div className="text-sm text-gray-600">Blockchain secured</div>
            </div>
            <div>
              <Shield className="text-blue-600 mx-auto mb-2" size={32} />
              <div className="font-medium">Government Verified</div>
              <div className="text-sm text-gray-600">Official validation</div>
            </div>
            <div>
              <Star className="text-yellow-600 mx-auto mb-2" size={32} />
              <div className="font-medium">Digital Certificate</div>
              <div className="text-sm text-gray-600">Legally valid</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Notification Component
  const NotificationPopup = () => {
    if (!showNotification) return null;

    return (
      <div className="fixed top-20 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 animate-bounce">
        <div className="flex items-center gap-3">
          <Award className="text-yellow-300" size={24} />
          <div>
            <div className="font-semibold">Congratulations! 🎉</div>
            <div className="text-sm">You earned +10 loyalty points!</div>
          </div>
          <button 
            onClick={() => setShowNotification(false)}
            className="text-white hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    );
  };

  // Analytics Component
  const AnalyticsModule = () => {
    const impactStats = [
      { label: "Farmers Served", value: "200+", unit: "per kiosk/month", icon: Users },
      { label: "Yield Improvement", value: "5-6%", unit: "average increase", icon: TrendingUp },
      { label: "Cost Reduction", value: "₹2,500", unit: "per farmer/season", icon: Target },
      { label: "Time Saved", value: "4 hours", unit: "per report", icon: Clock }
    ];

    const yieldComparisonData = [
      { year: '2022', beforeSA: 3.2, afterSA: 3.4 },
      { year: '2023', beforeSA: 3.3, afterSA: 3.6 },
      { year: '2024', beforeSA: 3.4, afterSA: 3.8 }
    ];

    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <BarChart3 className="text-indigo-500" size={32} />
          <h2 className="text-2xl font-bold text-center text-indigo-800">
            Data Analytics & Impact
          </h2>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <stat.icon className="text-indigo-600 mx-auto mb-4" size={40} />
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="font-medium text-gray-700">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.unit}</div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Yield Comparison */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Yield Impact: Before vs After Smart Agribooth</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yieldComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="beforeSA" fill="#EF4444" name="Before SA (tons/acre)" />
                  <Bar dataKey="afterSA" fill="#10B981" name="After SA (tons/acre)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Regional Performance */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Regional Adoption Rate</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Maharashtra', value: 35, fill: '#3B82F6' },
                      { name: 'Karnataka', value: 25, fill: '#10B981' },
                      { name: 'Tamil Nadu', value: 20, fill: '#F59E0B' },
                      { name: 'Others', value: 20, fill: '#8B5CF6' }
                    ]}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly Usage Trends */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Monthly Platform Usage</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={soilTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="nitrogen" stroke="#8B5CF6" strokeWidth={3} name="Active Users (hundreds)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Success Rate */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-4">Service Success Rate</h4>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" data={[{ name: 'Success Rate', value: 94, fill: '#10B981' }]}>
                  <RadialBar dataKey="value" cornerRadius={10} fill="#10B981" />
                  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold fill-current">
                    94%
                  </text>
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-purple-800">Future Roadmap</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Current: Software Platform</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AI-powered recommendations</li>
                <li>• Multi-language support</li>
                <li>• Government integration</li>
                <li>• Mobile-first design</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Phase 2: IoT Integration</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Soil sensor networks</li>
                <li>• Automated data collection</li>
                <li>• Real-time monitoring</li>
                <li>• Weather integration</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Phase 3: Full Automation</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Drone monitoring</li>
                <li>• Automated irrigation</li>
                <li>• Predictive analytics</li>
                <li>• Market predictions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Video Demo Component
  const VideoDemoModule = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Play className="text-red-500" size={32} />
          <h2 className="text-2xl font-bold text-center text-red-800">
            Platform Demo & Training
          </h2>
        </div>

        {/* Video Player */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="aspect-w-16 aspect-h-9 bg-gray-900 rounded-lg relative overflow-hidden">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-8 rounded-full hover:bg-opacity-30 transition-all transform hover:scale-105"
                >
                  <Play size={64} />
                </button>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Smart Agribooth Demo</h3>
                  <p className="text-sm opacity-80">Learn how to use soil analysis and cattle monitoring features</p>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white">
                <div className="text-center">
                  <Play className="mx-auto mb-4 text-green-400" size={64} />
                  <p className="text-lg">Demo Video Playing...</p>
                  <p className="text-sm opacity-75 mt-2">Duration: 5:30 minutes</p>
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition-colors"
                  >
                    Stop Video
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Training Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Training Modules</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <Play className="text-green-600" size={20} />
                <div>
                  <div className="font-medium">Soil Testing Basics</div>
                  <div className="text-sm text-gray-600">3:45 minutes</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Play className="text-blue-600" size={20} />
                <div>
                  <div className="font-medium">Cattle Health Monitoring</div>
                  <div className="text-sm text-gray-600">4:20 minutes</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <Play className="text-purple-600" size={20} />
                <div>
                  <div className="font-medium">Government Schemes Guide</div>
                  <div className="text-sm text-gray-600">6:15 minutes</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Tips</h3>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 rounded-lg">
                <div className="font-medium text-yellow-800">💡 Pro Tip</div>
                <div className="text-sm text-yellow-700">Test soil every 6 months for optimal results</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="font-medium text-green-800">🎯 Best Practice</div>
                <div className="text-sm text-green-700">Monitor cattle daily for early health detection</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium text-blue-800">💰 Money Saver</div>
                <div className="text-sm text-blue-700">Apply for schemes early to avoid deadline rush</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Multi-user Login Component  
  const LoginModule = () => {
    const [selectedUserType, setSelectedUserType] = useState('');

    const loginAsUser = (type) => {
      setUserType(type);
      setCurrentPage('dashboard');
      alert(`Logged in as ${type === 'farmer' ? 'Farmer' : 'Kiosk Operator'}`);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Select User Type</h2>
            <p className="text-gray-600 mt-2">Choose your role to continue</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => loginAsUser('farmer')}
              className="w-full p-4 border-2 border-green-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-all text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Farmer</div>
                  <div className="text-sm text-gray-600">Access your farm data and reports</div>
                </div>
              </div>
            </button>

            <button
              onClick={() => loginAsUser('operator')}
              className="w-full p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Kiosk Operator</div>
                  <div className="text-sm text-gray-600">Manage multiple farmers and operations</div>
                </div>
              </div>
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">Demo Mode - No actual authentication required</p>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Navigation
  const Navigation = () => (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-700 font-bold">SA</span>
            </div>
            <h1 className="text-xl font-bold">{t.title}</h1>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-green-600 text-white border border-green-500 rounded px-2 py-1 text-sm"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="mr">मराठी</option>
            </select>
            
            <div className="text-sm">
              {userType === 'farmer' ? '👨‍🌾 Farmer' : '🏢 Operator'}
            </div>
            
            <button
              onClick={() => setShowNotification(true)}
              className="relative p-2 hover:bg-green-600 rounded"
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {isOnline ? (
              <Wifi size={20} className="text-green-300" />
            ) : (
              <WifiOff size={20} className="text-red-300" />
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 pb-4">
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
              currentPage === 'home' ? 'bg-green-600' : 'hover:bg-green-600'
            }`}
          >
            <Home size={18} />
            {t.home}
          </button>
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
              currentPage === 'dashboard' ? 'bg-green-600' : 'hover:bg-green-600'
            }`}
          >
            <User size={18} />
            {t.dashboard}
          </button>
          <button
            onClick={() => setCurrentPage('soil')}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
              currentPage === 'soil' ? 'bg-green-600' : 'hover:bg-green-600'
            }`}
          >
            <TestTube size={18} />
            {t.soilHealth}
          </button>
          <button
            onClick={() => setCurrentPage('livestock')}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
              currentPage === 'livestock' ? 'bg-green-600' : 'hover:bg-green-600'
            }`}
          >
            <Heart size={18} />
            {t.livestock}
          </button>
          <button
            onClick={() => setCurrentPage('schemes')}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
              currentPage === 'schemes' ? 'bg-green-600' : 'hover:bg-green-600'
            }`}
          >
            <FileText size={18} />
            {t.schemes}
          </button>
          <button
            onClick={() => setCurrentPage('land')}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
              currentPage === 'land' ? 'bg-green-600' : 'hover:bg-green-600'
            }`}
          >
            <MapPin size={18} />
            {t.landRecords}
          </button>
          <button
            onClick={() => setCurrentPage('analytics')}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
              currentPage === 'analytics' ? 'bg-green-600' : 'hover:bg-green-600'
            }`}
          >
            <BarChart3 size={18} />
            Analytics
          </button>
          <button
            onClick={() => setCurrentPage('demo')}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
              currentPage === 'demo' ? 'bg-green-600' : 'hover:bg-green-600'
            }`}
          >
            <Play size={18} />
            Demo
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => {setCurrentPage('home'); setIsMenuOpen(false);}}
              className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-green-600 transition-colors"
            >
              <Home size={18} /> {t.home}
            </button>
            <button
              onClick={() => {setCurrentPage('dashboard'); setIsMenuOpen(false);}}
              className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-green-600 transition-colors"
            >
              <User size={18} /> {t.dashboard}
            </button>
            <button
              onClick={() => {setCurrentPage('soil'); setIsMenuOpen(false);}}
              className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-green-600 transition-colors"
            >
              <TestTube size={18} /> {t.soilHealth}
            </button>
            <button
              onClick={() => {setCurrentPage('livestock'); setIsMenuOpen(false);}}
              className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-green-600 transition-colors"
            >
              <Heart size={18} /> {t.livestock}
            </button>
            <button
              onClick={() => {setCurrentPage('schemes'); setIsMenuOpen(false);}}
              className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-green-600 transition-colors"
            >
              <FileText size={18} /> {t.schemes}
            </button>
            <button
              onClick={() => {setCurrentPage('land'); setIsMenuOpen(false);}}
              className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-green-600 transition-colors"
            >
              <MapPin size={18} /> {t.landRecords}
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  // Enhanced Home Page
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="text-blue-500" size={48} />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              {t.welcome}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('soil')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <Zap size={20} />
              {t.getStarted}
            </button>
            <button
              onClick={() => setCurrentPage('demo')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Play size={20} />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div
            onClick={() => setCurrentPage('soil')}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow border-l-4 border-green-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <TestTube size={32} className="text-green-600" />
              <Zap size={16} className="text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t.aiPowered} {t.soilHealth}</h3>
            <p className="text-gray-600